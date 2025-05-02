import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/pages/layout/layout.component';

export const routes: Routes = [
    {
        path:'',
        component: LayoutComponent,
        children:[
            {
                path:'',
                loadComponent: () => import('./products/pages/product-page/product-page.component')
            }
        ]
    }
];
