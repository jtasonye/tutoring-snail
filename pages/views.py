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

def contact( request ):
  return render( request, 'pages/contactUs.html' )

def services( request ):
  return render( request, 'pages/services.html' )




