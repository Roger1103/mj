# -*- coding: UTF-8 -*-
import json
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.http import HttpResponse
from django.shortcuts import render
from mj import settings
from search.models import Goods, CompanyInfo, EnquiryInfo, CompanyCourse, FriendSiteList, ArticleType, Article
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail


# Create your views here.
# 首页
def index(request):
    goods = Goods.objects.all()
    if len(goods) > 5:
        goods = goods[0: 5]

    companyInfos = CompanyInfo.objects.all()
    if companyInfos:
        companyInfo = companyInfos[0]

    siteLinks = FriendSiteList.objects.all()
    articleType = ArticleType.objects.all()
    context = {'goods_get': goods, 'companyInfo': companyInfo,
               'siteLinks': siteLinks, 'articleType': articleType}
    return render(request, "index.html", context)


# 搜索
def search(request):
    number = request.GET['s']
    goods = Goods.objects.filter(number__icontains=number)
    paginator = Paginator(goods, 20, 19)

    pgcount = paginator.count
    pgpages = paginator.num_pages

    page = request.GET.get('page')
    try:
        contacts = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        contacts = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        contacts = paginator.page(paginator.num_pages)

    companyInfos = CompanyInfo.objects.all()
    if companyInfos:
        companyInfo = companyInfos[0]

    siteLinks = FriendSiteList.objects.all()
    articleType = ArticleType.objects.all()
    context = {'goods_get': contacts, 'companyInfo': companyInfo, 'siteLinks': siteLinks,
               'pgcount': pgcount, 'pgpages': pgpages, 'articleType': articleType}
    return render(request, "inventory.html", context)


# 产品列表
# def inventory(request):
#    goods = Goods.objects.all()
#    if len(goods) > 10:
#        goods = goods[0: 9]
#    context = {'goods_get': goods}
#    return render(request, "inventory.html", context)


# 询价
def contact(request):
    number = request.GET['w']
    companyInfo = CompanyInfo.objects.all()
    if companyInfo:
        companyInfo = companyInfo[0]
    context = {'number': number, 'companyInfo': companyInfo}
    return render(request, "form.html", context)


# 提交询价
@csrf_exempt
def enquiry(request):
    name = request.POST['name']
    tell = request.POST['tell']
    company = request.POST['company']
    job = request.POST['job']
    email = request.POST['email']
    product_type = request.POST['product_type']
    product = request.POST['product']
    app = request.POST['app']
    msg = request.POST['msg']

    enquiry = EnquiryInfo.objects.create(name=name, phone=tell, companyName=company, email=email,
                                         position=job, brand=product_type, number=product,
                                         apply=app, describe=msg)

    if enquiry:
        status = "success"
        info = "提交申请成功"

        send_mail(u'询价提醒', name + "先生/女士，需要型号为：" + product + "的物料。请尽快联系！" +
                  "电话：" + tell + "  邮箱：" + email, settings.DEFAULT_FROM_EMAIL,
                  ['liuliming@mj-electronic.com'], fail_silently=True)
    else:
        status = "fail"
        info = "提交申请失败"

    return HttpResponse(json.dumps({"status": status, "info": info}))


# 关于我们
def about(request):
    companyInfos = CompanyInfo.objects.all()
    if companyInfos:
        companyInfo = companyInfos[0]

    companyCourse = CompanyCourse.objects.all()
    siteLinks = FriendSiteList.objects.all()
    articleType = ArticleType.objects.all()

    context = {'companyInfo': companyInfo, 'companyCourse': companyCourse,
               'siteLinks': siteLinks, 'articleType': articleType}
    return render(request, "about.html", context)


# 联系我们
def contactus(request):
    companyInfos = CompanyInfo.objects.all()
    if companyInfos:
        companyInfo = companyInfos[0]
    siteLinks = FriendSiteList.objects.all()
    articleType = ArticleType.objects.all()

    context = {'companyInfo': companyInfo, 'siteLinks': siteLinks,
               'articleType': articleType}
    return render(request, "contactus.html", context)

# 资讯列表
def articleList(request):
    type = request.GET['type']
    page = request.GET['page']

    articles = Article.objects.filter(type__id=type, is_release=1)
    paginator = Paginator(articles, 10, 9)

    pgcount = paginator.count

    try:
        article = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        article = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        article = paginator.page(paginator.num_pages)

    companyInfos = CompanyInfo.objects.all()
    if companyInfos:
        companyInfo = companyInfos[0]
    siteLinks = FriendSiteList.objects.all()
    articleType = ArticleType.objects.all()

    context = {'articles': article, 'pgcount': pgcount, 'type': type,
               'companyInfo': companyInfo, 'siteLinks': siteLinks, 'articleType': articleType}
    return render(request, "article_list.htm", context)

# 资讯详情
def articleContent(request):
    id = request.GET['id']
    articles = Article.objects.filter(id=id)
    if articles:
        article = articles[0]

    companyInfos = CompanyInfo.objects.all()
    if companyInfos:
        companyInfo = companyInfos[0]

    siteLinks = FriendSiteList.objects.all()

    articleType = ArticleType.objects.all()

    context = {'article': article, 'companyInfo': companyInfo, 'siteLinks': siteLinks, 'articleType': articleType}
    return render(request, "article_content.html", context)
