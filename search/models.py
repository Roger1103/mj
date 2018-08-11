# # -*- coding: UTF-8 -*-
from django.db import models
from DjangoUeditor.models import UEditorField

# Create your models here.

'''
############ 本地模型用到的字段类型和和参数的含义

max_length：最大长度
blank：True可以为空
null：可以为null
verbose_name：admin显示名
default：默认值
unique：True表示唯一
【ImageField】：upload_to表示MEDIA_ROOT的子目录，用来存放上传的文件
【CharField】
【URLField】
【IntegerField】
【DateTimeField】：auto_now_add表示自动设置当前时间
【TextField】
【BooleanField】
【EmailField】
'''


class Goods(models.Model):
    # 产品id
    id = models.AutoField(primary_key=True, max_length=20, verbose_name="产品id")
    # 产品名字
    name = models.CharField(max_length=100, verbose_name="产品名字")
    # 产品编号
    number = models.CharField(max_length=50, verbose_name="产品编号")
    # 仓库编号
    model = models.CharField(max_length=50, verbose_name="仓库编号")
    # 产品分类
    classify = models.CharField(max_length=50, default="", verbose_name="产品分类")
    # 产品属性
    attribute = models.CharField(max_length=50, default="", verbose_name="产品属性")
    # 基本单位
    baiscUnit = models.CharField(max_length=20, blank=True, verbose_name="基本单位")
    # 可开具发票类型
    invoiceType = models.CharField(max_length=20, default="其他", verbose_name="可开具发票类型")
    # 是否含税
    tax = models.BooleanField(default=True, verbose_name="是否含税")
    # 库存
    inventoryCeiling = models.IntegerField(default=0, verbose_name="库存")
    # 供应商
    mainSupplier = models.CharField(max_length=100, blank=True, verbose_name="供应商")
    # 产品说明
    explain = models.TextField(blank=True, verbose_name="产品说明")
    # 产品参数
    parameter = models.TextField(blank=True, verbose_name="产品参数")
    # 图片
    img = models.FileField(upload_to='./upload/goods', null=True, blank=True, verbose_name="图片")
    # 品牌
    brand = models.CharField(max_length=50, verbose_name="品牌")
    # 规格
    standard = models.TextField(blank=True, verbose_name="规格")

    index = models.IntegerField(default=0, verbose_name='搜索查看数')

    class Meta:
        verbose_name = u'产品库'
        verbose_name_plural = verbose_name
        ordering = ['index']

    def __unicode__(self):
        return self.name

    def __str__(self):
        return self.name


class EnquiryInfo(models.Model):
    id = models.AutoField(primary_key=True, max_length=20, verbose_name="id")

    name = models.CharField(max_length=20, verbose_name="客户姓名")

    phone = models.CharField(max_length=20, verbose_name="客户电话")

    email = models.CharField(max_length=20, verbose_name="客户邮箱")

    companyName = models.CharField(max_length=20, blank=True, verbose_name="公司名称")

    position = models.CharField(max_length=20, blank=True, verbose_name="职位")

    brand = models.CharField(max_length=20, blank=True, verbose_name="品牌")

    number = models.CharField(max_length=50, verbose_name="产品型号")

    apply = models.CharField(max_length=100, blank=True, verbose_name="应用")

    describe = models.CharField(max_length=200, blank=True, verbose_name="项目描述")

    remark = models.CharField(max_length=200, blank=True, verbose_name="备注")

    isConduct = models.BooleanField(default=False, verbose_name="是否处理")

    dateTime = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = u'询价申请'
        verbose_name_plural = verbose_name
        ordering = ['-isConduct', '-dateTime']

    def __unicode__(self):
        return self.name

    def __str__(self):
        return self.name


class CompanyInfo(models.Model):
    id = models.AutoField(primary_key=True, max_length=5, verbose_name="id")

    name = models.CharField(max_length=50, verbose_name="公司名字")

    synopsis = UEditorField(u'公司简介', width=900, height=300, toolbars="full",
                            imagePath="images/%(basename)s_%(datetime)s.%(extname)s",
                            filePath="file/%(basename)s_%(datetime)s.%(extname)s",
                            upload_settings={"imageMaxSize": 1204000})

    target = models.TextField(verbose_name="公司目标")

    qq = models.CharField(max_length=20, default="0", verbose_name="QQ")

    phone = models.CharField(max_length=20, verbose_name="公司电话")

    email = models.CharField(max_length=50, verbose_name="公司邮箱")

    postcode = models.CharField(max_length=10, verbose_name="邮编")

    emailLink = models.CharField(max_length=100, verbose_name="邮箱系统")

    sysLink = models.CharField(max_length=100, verbose_name="内部系统")

    address = models.CharField(max_length=100, verbose_name="公司地址")

    longitudeLatitude = models.CharField(max_length=40, verbose_name="公司经纬度")

    transit = models.CharField(max_length=50, verbose_name="公交站")

    transitInfo = models.CharField(max_length=200, verbose_name="公交站描述")

    navigation = models.CharField(max_length=50, verbose_name="导航")

    navigationInfo = models.CharField(max_length=200, verbose_name="导航描述")

    subway = models.CharField(max_length=50, verbose_name="地铁站")

    subwayInfo = models.CharField(max_length=200, verbose_name="地铁站描述")

    class Meta:
        verbose_name = u'公司信息'
        verbose_name_plural = verbose_name

    def __unicode__(self):
        return self.name

    def __str__(self):
        return self.name


class CompanyCourse(models.Model):
    id = models.AutoField(primary_key=True, max_length=2, verbose_name="id")

    year = models.IntegerField(verbose_name="年份")

    course = models.TextField(verbose_name="公司历程")

    class Meta:
        verbose_name = u'公司发展历程'
        verbose_name_plural = verbose_name

    def __unicode__(self):
        return self.course

    def __str__(self):
        return self.course


class BrandList(models.Model):
    id = models.AutoField(primary_key=True, verbose_name="id")

    name = models.CharField(max_length=20, verbose_name="品牌名")

    info = models.CharField(max_length=100, verbose_name="品牌描述")

    img = models.FileField(upload_to='./upload/brand/', blank=True, verbose_name="图片")

    class Meta:
        verbose_name = u'品牌'
        verbose_name_plural = verbose_name

    def __unicode__(self):
        return self.name

    def __str__(self):
        return self.name


class FriendSiteList(models.Model):
    id = models.AutoField(primary_key=True, max_length=2, verbose_name="id")

    name = models.CharField(max_length=50, verbose_name="网站名")

    link = models.CharField(max_length=50, verbose_name="网站链接")

    class Meta:
        verbose_name = u'友情链接'
        verbose_name_plural = verbose_name

    def __unicode__(self):
        return self.name

    def __str__(self):
        return self.name


class ArticleType(models.Model):
    id = models.AutoField(primary_key=True, max_length=2, verbose_name="id")

    typeName = models.CharField(max_length=50, verbose_name="分类名称")

    class Meta:
        verbose_name = u'资讯分类'
        verbose_name_plural = verbose_name

    def __unicode__(self):
        return self.typeName

    def __str__(self):
        return self.typeName


class Author(models.Model):
    id = models.AutoField(primary_key=True, max_length=2, verbose_name="id")

    authorName = models.CharField(max_length=50, verbose_name="作者")

    class Meta:
        verbose_name = u'资讯作者'
        verbose_name_plural = verbose_name

    def __unicode__(self):
        return self.authorName

    def __str__(self):
        return self.authorName


class Article(models.Model):
    id = models.AutoField(primary_key=True, max_length=2, verbose_name="id")

    title = models.CharField(max_length=200, verbose_name="标题")

    abstract = models.TextField(verbose_name="摘要")

    article_link = models.CharField(max_length=200, blank=True, verbose_name="资讯链接")

    is_link = models.BooleanField(default=True, verbose_name="是否有链接")

    content = UEditorField(u'内容', width=900, height=300, toolbars="full",
                           imagePath="images/%(basename)s_%(datetime)s.%(extname)s",
                           filePath="file/%(basename)s_%(datetime)s.%(extname)s",
                           upload_settings={"imageMaxSize": 1204000})

    img = models.FileField(upload_to='./upload/article/', blank=True, verbose_name="封面图片")

    author = models.ForeignKey(Author)

    type = models.ForeignKey(ArticleType)

    date_time = models.DateTimeField()

    is_release = models.BooleanField(default=True, verbose_name="是否发表")

    class Meta:
        verbose_name = u'资讯'
        verbose_name_plural = verbose_name
        ordering = ['-date_time']

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.title
