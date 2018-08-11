# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-03-17 12:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('search', '0022_auto_20180117_1431'),
    ]

    operations = [
        migrations.CreateModel(
            name='BrandList',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, verbose_name='id')),
                ('name', models.CharField(max_length=20, verbose_name='品牌名')),
                ('info', models.CharField(max_length=100, verbose_name='品牌描述')),
                ('img', models.FileField(blank=True, upload_to='./upload/brand/', verbose_name='图片')),
            ],
            options={
                'verbose_name': '品牌',
                'verbose_name_plural': '品牌',
            },
        ),
        migrations.CreateModel(
            name='FriendSiteList',
            fields=[
                ('id', models.AutoField(max_length=2, primary_key=True, serialize=False, verbose_name='id')),
                ('name', models.CharField(max_length=50, verbose_name='网站名')),
                ('link', models.CharField(max_length=50, verbose_name='网站链接')),
            ],
            options={
                'verbose_name': '友情链接',
                'verbose_name_plural': '友情链接',
            },
        ),
        migrations.AddField(
            model_name='companyinfo',
            name='postcode',
            field=models.CharField(default=518101, max_length=10, verbose_name='邮编'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='companyinfo',
            name='email',
            field=models.CharField(max_length=50, verbose_name='公司邮箱'),
        ),
        migrations.AlterField(
            model_name='goods',
            name='img',
            field=models.FileField(blank=True, upload_to='./upload/goods', verbose_name='图片'),
        ),
    ]