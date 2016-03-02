from django.contrib import admin
from restaurant.models import CategoryName,SubCategoryName,ItemName
# Register your models here.
admin.site.register(CategoryName)
admin.site.register(SubCategoryName)
admin.site.register(ItemName)