from django.shortcuts import render

def home(request):
    return render(request, "main/home.html")

def about(request):
    return render(request, "main/about.html")

def contact(request):
    return render(request, "main/contact.html")

def services(request):
    return render(request, "main/services.html")

def portfolio(request):
    return render(request, "main/portfolio.html")

def testimonials(request):
    return render(request, "main/testimonials.html")

def faq(request):
    return render(request, "main/faq.html")

def dashboard(request):
    return render(request, "main/dashboard.html")

def team(request):
    return render(request, "main/team.html")
