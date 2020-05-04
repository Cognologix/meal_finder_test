import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";
import { DetailsPageComponent } from "./details-page/details-page.component";
import { HomeComponent } from "./home/home.component";

export const AppRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "details", component: DetailsPageComponent },
  { path: "", redirectTo: "", pathMatch: "full" },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes, {
  useHash: true,
});
