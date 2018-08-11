# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-01-16 14:25
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('search', '0027_auto_20171210_0908'),
    ]

    operations = [
        migrations.CreateModel(
            name='CompanyCourse',
            fields=[
                ('id', models.AutoField(max_length=2, primary_key=True, serialize=False, verbose_name='id')),
                ('year', models.IntegerField(max_length=4, verbose_name='年份')),
                ('course', models.TextField(verbose_name='公司历程')),
            ],
            options={
                'verbose_name': '公司发展历程',
                'verbose_name_plural': '公司发展历程',
            },
        ),
        migrations.AlterModelOptions(
            name='goods',
            options={'ordering': ['index'], 'verbose_name': '产品库', 'verbose_name_plural': '产品库'},
        ),
        migrations.RemoveField(
            model_name='goods',
            name='appendix',
        ),
        migrations.RemoveField(
            model_name='goods',
            name='checking',
        ),
        migrations.RemoveField(
            model_name='goods',
            name='lowerInventoryLimit',
        ),
        migrations.RemoveField(
            model_name='goods',
            name='lpercentage',
        ),
        migrations.RemoveField(
            model_name='goods',
            name='mpq',
        ),
        migrations.RemoveField(
            model_name='goods',
            name='usdOffer',
        ),
        migrations.AddField(
            model_name='companyinfo',
            name='navigation',
            field=models.CharField(default=56, max_length=50, verbose_name='导航'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='companyinfo',
            name='navigationInfo',
            field=models.CharField(default=22, max_length=200, verbose_name='导航描述'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='companyinfo',
            name='subway',
            field=models.CharField(default=12, max_length=50, verbose_name='地铁站'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='companyinfo',
            name='subwayInfo',
            field=models.CharField(default=112, max_length=200, verbose_name='地铁站描述'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='companyinfo',
            name='synopsis',
            field=models.TextField(default=21, verbose_name='公司简介'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='companyinfo',
            name='target',
            field=models.TextField(default=211, verbose_name='公司目标'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='companyinfo',
            name='transit',
            field=models.CharField(default=2121, max_length=50, verbose_name='公交站'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='companyinfo',
            name='transitInfo',
            field=models.CharField(default=1, max_length=200, verbose_name='公交站描述'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='goods',
            name='img',
            field=models.FileField(blank=True, upload_to='./upload/', verbose_name='图片'),
        ),
        migrations.AlterField(
            model_name='companyinfo',
            name='address',
            field=models.CharField(max_length=100, verbose_name='公司地址'),
        ),
        migrations.AlterField(
            model_name='enquiryinfo',
            name='apply',
            field=models.CharField(blank=True, max_length=100, verbose_name='应用'),
        ),
        migrations.AlterField(
            model_name='enquiryinfo',
            name='brand',
            field=models.CharField(blank=True, max_length=20, verbose_name='品牌'),
        ),
        migrations.AlterField(
            model_name='enquiryinfo',
            name='companyName',
            field=models.CharField(blank=True, max_length=20, verbose_name='公司名称'),
        ),
        migrations.AlterField(
            model_name='enquiryinfo',
            name='describe',
            field=models.CharField(blank=True, max_length=200, verbose_name='项目描述'),
        ),
        migrations.AlterField(
            model_name='enquiryinfo',
            name='number',
            field=models.CharField(max_length=50, verbose_name='产品型号'),
        ),
        migrations.AlterField(
            model_name='enquiryinfo',
            name='position',
            field=models.CharField(blank=True, max_length=20, verbose_name='职位'),
        ),
        migrations.AlterField(
            model_name='enquiryinfo',
            name='remark',
            field=models.CharField(blank=True, max_length=200, verbose_name='备注'),
        ),
        migrations.AlterField(
            model_name='goods',
            name='inventoryCeiling',
            field=models.IntegerField(default=0, verbose_name='库存'),
        ),
        migrations.AlterField(
            model_name='goods',
            name='mainSupplier',
            field=models.CharField(blank=True, max_length=100, verbose_name='供应商'),
        ),
        migrations.AlterField(
            model_name='goods',
            name='model',
            field=models.CharField(max_length=50, verbose_name='仓库编号'),
        ),
    ]