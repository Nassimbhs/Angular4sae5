import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService } from '../_services/forgot-password.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public form: any = {
    username: null
  };
    constructor(private forgetPasswordService:ForgotPasswordService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(param=>console.log(param))
  }
  public forgetPassword(){
    this.forgetPasswordService.forgotPassword(this.form.username).subscribe(()=>{
      console.log(this.form.username)
    })
    
  }

}