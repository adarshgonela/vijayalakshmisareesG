import { Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { FeaturedSareesComponent } from './component/featured-sarees/featured-sarees.component';
import { NewArrivalsComponent } from './component/new-arrivals/new-arrivals.component';

export const routes: Routes = [
    {path:'navbar',
        component : NavbarComponent
    },
    {path:'footer',
        component : FooterComponent
    },
    {path:'featuredsarees',
        component : FeaturedSareesComponent
    },
    {path:'newarrivals',
        component : NewArrivalsComponent
    },
];
