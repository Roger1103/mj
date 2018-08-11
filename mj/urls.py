"""mj URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin

from mj import settings
from search import views as search_views



urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', search_views.index),
    url(r'^search/', search_views.search),
    url(r'^contact/', search_views.contact),
    url(r'^enquiry/', search_views.enquiry),
    url(r'^about/', search_views.about),
    url(r'^contactus/', search_views.contactus),
    url(r'^articlelist/', search_views.articleList),
    url(r'^articlecontent/', search_views.articleContent),
    url(r'^ueditor/',include('DjangoUeditor.urls' )),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
