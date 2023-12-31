import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DataViewModule , DataViewLayoutOptions } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { MenubarModule } from 'primeng/menubar';
import { AccordionModule } from 'primeng/accordion';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MenuModule } from 'primeng/menu';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ImageModule } from 'primeng/image';
import { SlideMenuModule } from 'primeng/slidemenu';
import { ChartModule } from 'primeng/chart';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';
import { BadgeModule } from 'primeng/badge';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    TabViewModule,
    TooltipModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    DataViewModule,
    TagModule,
    CardModule,
    RatingModule,
    MenubarModule,
    AccordionModule,
    SelectButtonModule,
    MenuModule,
    CalendarModule,
    CheckboxModule,
    RadioButtonModule,
    InputSwitchModule,
    ImageModule,
    SlideMenuModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    KeyFilterModule,
    MultiSelectModule,
    InputNumberModule,
    BadgeModule,
    DialogModule,
    DynamicDialogModule,
    FileUploadModule,
    

  ],
  exports:[
    ButtonModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    TabViewModule,
    TooltipModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    DataViewModule,
    TagModule,
    DataViewLayoutOptions,
    CardModule,
    RatingModule,
    MenubarModule,
    AccordionModule,
    SelectButtonModule,
    MenuModule,
    CalendarModule,
    CheckboxModule,
    RadioButtonModule,
    InputSwitchModule,
    ImageModule,
    SlideMenuModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    KeyFilterModule,
    MultiSelectModule,
    InputNumberModule,
    BadgeModule,
    DialogModule,
    DynamicDialogModule,
    FileUploadModule,
    
  ],
  providers:[MessageService]
})
export class SharedModule { }
