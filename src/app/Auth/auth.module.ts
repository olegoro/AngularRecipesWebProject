import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AuthComponent } from "./auth.component";

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    // RouterModule.forChild([{ path: 'auth', component: AuthComponent }]),
    RouterModule.forChild([{ path: '', component: AuthComponent }]),
    SharedModule,
    FormsModule
  ]
})
export class AuthModule {}
