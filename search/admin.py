from django.contrib import admin

# Register your models here.
from search.models import *


admin.site.register(Goods)
admin.site.register(EnquiryInfo)
admin.site.register(CompanyInfo)
admin.site.register(CompanyCourse)
admin.site.register(BrandList)
admin.site.register(FriendSiteList)
admin.site.register(Author)
admin.site.register(ArticleType)
admin.site.register(Article)


