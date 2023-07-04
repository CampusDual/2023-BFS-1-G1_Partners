import { Component, Inject, Injector, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, LocalStorageService, NavigationService, OntimizeService } from 'ontimize-web-ngx';
import { Observable } from 'rxjs';

@Component({
  selector: 'login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  userCtrl: FormControl = new FormControl('', Validators.required);
  pwdCtrl: FormControl = new FormControl('', Validators.required);
  sessionExpired = false;
  protected userRoleService: OntimizeService;
  router: Router;
  localStorage: any;

  constructor(
    private actRoute: ActivatedRoute,
    router: Router,
    @Inject(NavigationService) public navigation: NavigationService,
    @Inject(AuthService) private authService: AuthService,
    @Inject(LocalStorageService) private localStorageService,
    public injector: Injector
  ) {
    this.router = router;
    this.userRoleService = this.injector.get(OntimizeService);
    const qParamObs: Observable<any> = this.actRoute.queryParams;
    qParamObs.subscribe(params => {
      if (params) {
        const isDetail = params['session-expired'];
        if (isDetail === 'true') {
          this.sessionExpired = true;
        } else {
          this.sessionExpired = false;
        }
      }
    });

  }

  ngOnInit(): any {
    this.navigation.setVisible(false);
    this.configureUserRoleService();
    this.loginForm.addControl('username', this.userCtrl);
    this.loginForm.addControl('password', this.pwdCtrl);

    if (this.authService.isLoggedIn()) {
      let role_id = this.localStorage.getItem("id_rolename");
      if(role_id == 0){
        this.router.navigate(['../'], { relativeTo: this.actRoute });
      }else{
        this.router.navigate(['/main/product-home']);
      }
    } else {
      this.authService.clearSessionData();
    }
  }

  protected configureUserRoleService(){
    const conf = this.userRoleService.getDefaultServiceConfiguration('userrole');
    this.userRoleService.configureService(conf);
  }




  login() {
    const userName = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    if (userName && userName.length > 0 && password && password.length > 0) {
      const self = this;
      this.authService.login(userName, password)
        .subscribe(() => {
          self.sessionExpired = false;
        //   const filter = {
        //     'user_': userName
        //   };
        //   this.userRoleService.query(filter,['id_rolename'], 'userrole').subscribe(
        //     res=>{

        //       if(res.data && res.data.length){
        //         let rol = res.data[0].id_rolename;
        //         localStorage.setItem('id_rolename', rol);    

        //         if(rol == 1){
        //           self.router.navigate(['../'], { relativeTo: this.actRoute });
        //         }else{
        //           self.router.navigate(['/main/home-partner']);
        //         }

        //       }else{
        //         self.router.navigate(['../'], { relativeTo: this.actRoute });

        //       }
        //     },
        //     err=>console.log(err)
        //   );

          self.router.navigate(['/main/product-home'], { relativeTo: this.actRoute });

        }, this.handleError);
    }
  }




  handleError(error) {
    switch (error.status) {
      case 401:
        console.error('Email or password is wrong.');
        break;
      default: break;
    }
  }

}
