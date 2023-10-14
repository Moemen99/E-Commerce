import { ProductDetailsComponent } from './product-details/product-details.component';
import { authGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { BrandComponent } from './brand/brand.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[authGuard],component:HomeComponent},
  {path:'about',canActivate:[authGuard],component:AboutComponent},
  {path:'categories',canActivate:[authGuard],component:CategoriesComponent},
  {path:'cart',canActivate:[authGuard],component:CartComponent},
  {path:'productdetails/:id',canActivate:[authGuard],component:ProductDetailsComponent},
  {path:'brands',canActivate:[authGuard],component:BrandComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
