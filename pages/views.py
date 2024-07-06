from django.shortcuts import render

# Create your views here.
def welcome( request ):
    return render( request, 'pages/index.html' )

def signUp( request ):
  return render( request, 'pages/signUp.html' )

def home( request ):
  return render( request, 'pages/home.html' )

def about(request):
  return render( request, 'pages/aboutUs.html' )

def book( request ):
  return render( request, 'pages/bookUs.html' )

def services( request ):
  return render( request, 'pages/services.html' )




