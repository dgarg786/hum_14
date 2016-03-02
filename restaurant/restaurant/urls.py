from django.conf.urls import patterns, url
from restaurant import views

urlpatterns= [
    
    url(r'^$', views.index,name='index'),
    url(r'^subMenu$',views.subMenu,name='subMenu'),
    url(r'^subCategory/$',views.subCategory,name='subCategory'),
]