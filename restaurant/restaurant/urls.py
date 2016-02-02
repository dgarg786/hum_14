from django.conf.urls import patterns, url
from restaurant import views

urlpatterns= [
    
    url(r'^$', views.index,name='index'),
]