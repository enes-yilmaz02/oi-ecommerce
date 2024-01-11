import { Router } from '@angular/router';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';
import { UserRole } from 'src/app/models/role.enum';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  userFormRegister: FormGroup;
  generatedCode: any;
  senderMail: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  activeButton: boolean = false;
  Genders: any[] = [
    { name: 'Male'},
    { name: 'Female' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private userService: UserService,
    private router: Router,
    private translocoService:TranslocoService
  ) {
    this.userFormRegister = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(8)]],
      code: [''],
    });

  }

  checkEmailAvailability(email: string): Observable<{ available: boolean }> {
    return this.userService.getUsers().pipe(
      map((users) => {
        const userWithEmail = users.find((user) => user.email === email);
        return { available: !userWithEmail };
      })
    );
  }

  generateRandomCode(): string {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  onSubmit() {
    if (this.userFormRegister.valid) {
      this.generatedCode = this.generateRandomCode();
      const formValuesArray = this.userFormRegister.value;
      const email = formValuesArray.email;
      formValuesArray.role = UserRole.User;
      this.checkEmailAvailability(email).subscribe((result) => {
        if (result && result.available) {
          const body = {
            to: email,
            subject: this.translocoService.translate('emailVerifycode'),
            text: this.translocoService.translate('emailVerifyMessage') + this.generatedCode,
          };
          this.userService.sendEmailGlobal(body).subscribe(
            () => {
              this.senderMail.next(true);
              this.activeButton = true;
              this.messageService.add({
                severity: 'success',
                summary: this.translocoService.translate('successMessage'),
                detail:this.translocoService.translate('registerForm.messageDetailsuccess'),
              });
            }
          );
        } else {
          this.messageService.clear();
          this.messageService.add({
            severity: 'error',
            summary: this.translocoService.translate('errorMessage'),
            detail:
            this.translocoService.translate('registerForm.messageDetailerror'),
          });
          return EMPTY;
        }
      });
    } else {
      this.messageService.clear();
      this.messageService.add({
        severity: 'warn',
        summary: this.translocoService.translate('warnMessage'),
        detail: this.translocoService.translate('registerForm.messageDetailwarn'),
      });
    }
  }

  verifyCode() {
    const code = this.userFormRegister.get('code').value;
    if (code === this.generatedCode) {
      const formArray = this.userFormRegister.value;
      delete formArray['code'];
      formArray.role = UserRole.User;
      this.userService.addUsers(formArray).subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: this.translocoService.translate('successMessage'),
          detail:
          this.translocoService.translate('registerForm.messageDetailsuccessverify'),
        });
        setTimeout(() => {
          localStorage.clear();
          this.router.navigate(['/login']);
        }, 2000);
      });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: this.translocoService.translate('warnMessageverify'),
        detail: this.translocoService.translate('registerForm.messageDetailerrorverify'),
      });
    }
  }
}
