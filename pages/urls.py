# pages/urls.py

from django.urls import path
from pages import views

urlpatterns = [

    path('', views.welcome, name = 'welcome'),
    path('home/', views.home, name = 'home'),
    path('aboutUs/',views.about, name='aboutUs'),
    path('bookUs/',views.book, name='bookUs'),
    path('services/',views.services, name='services'),
    path('signUp/',views.signUp, name='signUp'),
    path('math/', views.math, name='math'),
    path('CS/', views.CS, name='CS'),
    path('resume/', views.resume, name='resume'),
    path('linkedIn/', views.linkedIn, name='linkedIn'),
]