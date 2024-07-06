# pages/urls.py

from django.urls import path
from pages import views

urlpatterns = [

    path('', views.welcome, name = 'welcome'),
    path('home/', views.home, name = 'home'),
    path('aboutUs/',views.about, name='aboutUs'),
    path('contactUs/',views.contact, name='contact'),
    path('services/',views.services, name='services'),
    path('signUp/',views.signUp, name='signUp'),
]