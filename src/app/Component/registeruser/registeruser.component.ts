import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from 'src/app/common/city';
import { Country } from 'src/app/common/country';
import { State } from 'src/app/common/state';
import { User } from 'src/app/common/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css'],
})
export class RegisteruserComponent {
  user: User = new User();
  msg: string = '';
  response = null;
  registerFormGroup: FormGroup | any;
  //  countries: Country = new Country();

  countries: Country[] = [];
  states: State[] = [];
  cities: City[] = [];

  constructor(
    private userService: UserServiceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    (this.registerFormGroup = this.formBuilder.group({
      userAddress: this.formBuilder.group({
        country: [''],
        state: [''],
        city: [''],
      }),
      basicUserDetails: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: [''],
        phNo: [''],
        date: [''],
        gender: [''],
      }),
    })),
      console.log('inside init');

    // this.getcountry();
  }

  onSubmit() {
    const formGroup = this.registerFormGroup.get('basicUserDetails').value;
    console.log(formGroup);
    this.user = formGroup;
    this.user.country = 'India';
    this.user.state = 'Maharashtra';
    this.user.city = 'Pune';
    this.user.userPwd = '';
    this.user.accountStatus = 'locked';

    console.log(this.user);

    this.userService.registerUser(this.user).subscribe((data) => {
      this.msg = data;
    });
    this.registerFormGroup.reset();  
  }
  reset1(){
        const formGroup = this.registerFormGroup.get('basicUserDetails');
        console.log(formGroup);
        this.registerFormGroup.reset();
        this.msg="";
  }
  getcountry() {
    this.userService.getCountries().subscribe((data) => {
      // console.log('Retrieved countries: ' + JSON.stringify(data));
      alert(data);
      this.countries = data;
    });
  }

  getStates(formGroupName: string) {
    const formGroup = this.registerFormGroup.get(formGroupName);

    const countryCode = formGroup.value.country.code;
    const countryName = formGroup.value.country.name;

    console.log(`${formGroupName} country code: ${countryCode}`);
    console.log(`${formGroupName} country name: ${countryName}`);

    this.userService.getStates(countryCode).subscribe((data) => {
      this.states = data;
      // select first item by default
      formGroup.get('state').setValue(data[0]);
    });
  }

  getCities(formGroupName: string) {
    const formGroup = this.registerFormGroup.get(formGroupName);

    const stateId = formGroup.value.state.id;
    const stateName = formGroup.value.state.name;

    console.log(`${formGroupName} state id: ${stateId}`);
    console.log(`${formGroupName} state name: ${stateName}`);

    this.userService.getcities(stateId).subscribe((data) => {
      this.cities = data;
      // select first item by default
      formGroup.get('city').setValue(data[0]);
    });
  }
}
