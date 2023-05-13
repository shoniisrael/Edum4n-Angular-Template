import { Input, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { CountdownModule } from 'ngx-countdown';
import { MetismenuAngularModule } from '@metismenu/angular';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { CategoriesComponent } from './homeone/categories/categories.component';
import { HeroComponent } from './homeone/hero/hero.component';
import { HomeonemainComponent } from './homeone/homeonemain/homeonemain.component';
import { StudentsectionComponent } from './homeone/studentsection/studentsection.component';
import { FeaturesectionComponent } from './homeone/featuresection/featuresection.component';
import { BannersectionComponent } from './homeone/bannersection/bannersection.component';
import { EducationsectionComponent } from './homeone/educationsection/educationsection.component';
import { FooteroneComponent } from './common/footer/footerone/footerone.component';
import { BrandsliderComponent } from './elements/slider/brandslider/brandslider.component';
import { TestimonialsliderComponent } from './elements/slider/testimonialslider/testimonialslider.component';
import { CoursetabComponent } from './elements/tabs/coursetab/coursetab.component';
import { HeaderoneComponent } from './common/header/headerone/headerone.component';
import { HeadertwoComponent } from './common/header/headertwo/headertwo.component';
import { HometwomainComponent } from './hometwo/hometwomain/hometwomain.component';
import { HerosectiontwoComponent } from './hometwo/herosectiontwo/herosectiontwo.component';
import { CountersectionComponent } from './hometwo/countersection/countersection.component';
import { AboutsectiontwoComponent } from './hometwo/aboutsectiontwo/aboutsectiontwo.component';
import { CategoriessectiontwoComponent } from './hometwo/categoriessectiontwo/categoriessectiontwo.component';
import { PartnersectionComponent } from './hometwo/partnersection/partnersection.component';
import { TeachersectionComponent } from './hometwo/teachersection/teachersection.component';
import { ZoomsectionComponent } from './hometwo/zoomsection/zoomsection.component';
import { SkillsectionComponent } from './hometwo/skillsection/skillsection.component';
import { BlogsectionComponent } from './hometwo/blogsection/blogsection.component';
import { CoursetabtwoComponent } from './elements/tabs/coursetabtwo/coursetabtwo.component';
import { HomethreemainComponent } from './homethree/homethreemain/homethreemain.component';
import { AcademiccourseComponent } from './homethree/academiccourse/academiccourse.component';
import { CountersectionthreeComponent } from './homethree/countersectionthree/countersectionthree.component';
import { CampussectionComponent } from './homethree/campussection/campussection.component';
import { GallaryinstaComponent } from './homethree/gallaryinsta/gallaryinsta.component';
import { FootertwoComponent } from './common/footer/footertwo/footertwo.component';
import { MessagesectionComponent } from './homethree/messagesection/messagesection.component';
import { CardsectionComponent } from './homethree/cardsection/cardsection.component';
import { HerothreeComponent } from './homethree/herothree/herothree.component';
import { EventsectionComponent } from './homethree/eventsection/eventsection.component';
import { EventinnerComponent } from './homethree/eventinner/eventinner.component';
import { TestimonialthreeComponent } from './elements/slider/testimonialthree/testimonialthree.component';
import { HeaderthreeComponent } from './common/header/headerthree/headerthree.component';
import { MobilemenuComponent } from './common/header/mobilemenu/mobilemenu.component';
import { HeaderfourComponent } from './common/header/headerfour/headerfour.component';
import { AboutmainComponent } from './about/aboutmain/aboutmain.component';
import { AboutfeatureComponent } from './about/aboutfeature/aboutfeature.component';
import { AboutfeaturevideoComponent } from './about/aboutfeaturevideo/aboutfeaturevideo.component';
import { AboutcounterComponent } from './about/aboutcounter/aboutcounter.component';
import { KnowsbetterComponent } from './about/knowsbetter/knowsbetter.component';
import { AboutinstructorComponent } from './about/aboutinstructor/aboutinstructor.component';
import { AffiliatesectionComponent } from './about/affiliatesection/affiliatesection.component';
import { MembershipmainComponent } from './membership/membershipmain/membershipmain.component';
import { MembershipsectionComponent } from './membership/membershipsection/membershipsection.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ContactmainComponent } from './contact/contactmain/contactmain.component';
import { ContactformComponent } from './contact/contactform/contactform.component';
import { ContactsidebarComponent } from './contact/contactsidebar/contactsidebar.component';
import { ContactmapComponent } from './contact/contactmap/contactmap.component';
import { FaqmainComponent } from './faqpage/faqmain/faqmain.component';
import { FaqtopicComponent } from './faqpage/faqtopic/faqtopic.component';
import { FaqbannerComponent } from './faqpage/faqbanner/faqbanner.component';
import { FaqdetailsmainComponent } from './faqdetails/faqdetailsmain/faqdetailsmain.component';
import { EventmainComponent } from './event/eventmain/eventmain.component';
import { EventdetailsmainComponent } from './eventdetails/eventdetailsmain/eventdetailsmain.component';
import { EventdetailsidebarComponent } from './eventdetails/eventdetailsidebar/eventdetailsidebar.component';
import { InstructormainComponent } from './instructor/instructormain/instructormain.component';
import { InstructorpromainComponent } from './instructor/instructorpromain/instructorpromain.component';
import { PaginationComponent } from './common/pagination/pagination.component';
import { BecomeinstructormainComponent } from './instructor/becomeinstructor/becomeinstructormain/becomeinstructormain.component';
import { JourneysectionComponent } from './instructor/becomeinstructor/journeysection/journeysection.component';
import { KnowledgesectionComponent } from './instructor/becomeinstructor/knowledgesection/knowledgesection.component';
import { BlogmainComponent } from './blog/blogmain/blogmain.component';
import { BlogsearchComponent } from './blog/blogsearch/blogsearch.component';
import { BlogrecentpostComponent } from './blog/blogrecentpost/blogrecentpost.component';
import { BlogcategoryComponent } from './blog/blogcategory/blogcategory.component';
import { BlogtagsComponent } from './blog/blogtags/blogtags.component';
import { BlogdetailsmainComponent } from './blogdetails/blogdetailsmain/blogdetailsmain.component';
import { BlogcommentComponent } from './blogdetails/blogcomment/blogcomment.component';
import { BlogformComponent } from './blogdetails/blogform/blogform.component';
import { WishlistmainComponent } from './wishlist/wishlistmain/wishlistmain.component';
import { CartmainComponent } from './cart/cartmain/cartmain.component';
import { CheckoutmainComponent } from './checkout/checkoutmain/checkoutmain.component';
import { ShopdetailsmainComponent } from './shopdetails/shopdetailsmain/shopdetailsmain.component';
import { RelatedproductComponent } from './elements/slider/relatedproduct/relatedproduct.component';
import { ShopmainComponent } from './shop/shopmain/shopmain.component';
import { ShopcatComponent } from './shop/shopcat/shopcat.component';
import { ShopratingComponent } from './shop/shoprating/shoprating.component';
import { ShoppriceComponent } from './shop/shopprice/shopprice.component';
import { ShoplevelComponent } from './shop/shoplevel/shoplevel.component';
import { ShoplanguageComponent } from './shop/shoplanguage/shoplanguage.component';
import { ShopdurationComponent } from './shop/shopduration/shopduration.component';
import { CourseonemainComponent } from './course/courseone/courseonemain/courseonemain.component';
import { CoursebarComponent } from './course/coursebar/coursebar.component';
import { CoursetwomainComponent } from './course/coursetwo/coursetwomain/coursetwomain.component';
import { CoursethreemainComponent } from './course/coursethree/coursethreemain/coursethreemain.component';
import { CoursefourmainComponent } from './course/coursefour/coursefourmain/coursefourmain.component';
import { CoursedetailsmainComponent } from './coursedetails/coursedetailsmain/coursedetailsmain.component';
import { CoursecurriculamComponent } from './coursedetails/coursecurriculam/coursecurriculam.component';
import { CourseinstructorComponent } from './coursedetails/courseinstructor/courseinstructor.component';
import { StudentfeedbackComponent } from './coursedetails/studentfeedback/studentfeedback.component';
import { CoursereviewComponent } from './coursedetails/coursereview/coursereview.component';
import { CoursevideoComponent } from './coursedetails/coursevideo/coursevideo.component';
import { ZoomclassmainComponent } from './zoom/zoomclassmain/zoomclassmain.component';
import { ZoomclassdetailsmainComponent } from './zoom/zoomclassdetailsmain/zoomclassdetailsmain.component';
import { BreadcrumbComponent } from './common/breadcrumb/breadcrumb.component';



@NgModule({ 
  imports: [
    CommonModule,
    RouterModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSortModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatExpansionModule,
    MatToolbarModule,
    MatDatepickerModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    CountdownModule,
    MetismenuAngularModule,
    HttpClientModule,
    SwiperModule
  ],
  declarations: [
    CategoriesComponent,
    HeroComponent,
    HomeonemainComponent,
    StudentsectionComponent,
    FeaturesectionComponent,
    BannersectionComponent,
    EducationsectionComponent,
    FooteroneComponent,
    BrandsliderComponent,
    TestimonialsliderComponent,
    CoursetabComponent,
    HeaderoneComponent,
    HeadertwoComponent,
    HometwomainComponent,
    HerosectiontwoComponent,
    CountersectionComponent,
    AboutsectiontwoComponent,
    CategoriessectiontwoComponent,
    PartnersectionComponent,
    TeachersectionComponent,
    ZoomsectionComponent,
    SkillsectionComponent,
    BlogsectionComponent,
    CoursetabtwoComponent,
    HomethreemainComponent,
    AcademiccourseComponent,
    CountersectionthreeComponent,
    CampussectionComponent,
    GallaryinstaComponent,
    FootertwoComponent,
    MessagesectionComponent,
    CardsectionComponent,
    HerothreeComponent,
    EventsectionComponent,
    EventinnerComponent,
    TestimonialthreeComponent,
    HeaderthreeComponent,
    MobilemenuComponent,
    HeaderfourComponent,
    AboutmainComponent,
    AboutfeatureComponent,
    AboutfeaturevideoComponent,
    AboutcounterComponent,
    KnowsbetterComponent,
    AboutinstructorComponent,
    AffiliatesectionComponent,
    MembershipmainComponent,
    MembershipsectionComponent,
    ErrorpageComponent,
    ContactmainComponent,
    ContactformComponent,
    ContactsidebarComponent,
    ContactmapComponent,
    FaqmainComponent,
    FaqtopicComponent,
    FaqbannerComponent,
    FaqdetailsmainComponent,
    EventmainComponent,
    EventdetailsmainComponent,
    EventdetailsidebarComponent,
    InstructormainComponent,
    InstructorpromainComponent,
    PaginationComponent,
    BecomeinstructormainComponent,
    JourneysectionComponent,
    KnowledgesectionComponent,
    BlogmainComponent,
    BlogsearchComponent,
    BlogrecentpostComponent,
    BlogcategoryComponent,
    BlogtagsComponent,
    BlogdetailsmainComponent,
    BlogcommentComponent,
    BlogformComponent,
    WishlistmainComponent,
    CartmainComponent,
    CheckoutmainComponent,
    ShopdetailsmainComponent,
    RelatedproductComponent,
    ShopmainComponent,
    ShopcatComponent,
    ShopratingComponent,
    ShoppriceComponent,
    ShoplevelComponent,
    ShoplanguageComponent,
    ShopdurationComponent,
    CourseonemainComponent,
    CoursebarComponent,
    CoursetwomainComponent,
    CoursethreemainComponent,
    CoursefourmainComponent,
    CoursedetailsmainComponent,
    CoursecurriculamComponent,
    CourseinstructorComponent,
    StudentfeedbackComponent,
    CoursereviewComponent,
    CoursevideoComponent,
    ZoomclassmainComponent,
    ZoomclassdetailsmainComponent,
    BreadcrumbComponent
  ]
})
export class EdumanModule { }
