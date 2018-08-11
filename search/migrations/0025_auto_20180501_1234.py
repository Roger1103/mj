# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-05-01 12:34
from __future__ import unicode_literals

import DjangoUeditor.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('search', '0024_auto_20180324_1237'),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(max_length=2, primary_key=True, serialize=False, verbose_name='id')),
                ('title', models.CharField(max_length=200, verbose_name='标题')),
                ('abstract', models.TextField(verbose_name='摘要')),
                ('content', DjangoUeditor.models.UEditorField(verbose_name='内容')),
                ('img', models.FileField(blank=True, upload_to='./upload/article/', verbose_name='封面图片')),
                ('date_time', models.DateTimeField()),
                ('is_release', models.BooleanField(default=True, verbose_name='是否发表')),
            ],
            options={
                'verbose_name': '资讯',
                'verbose_name_plural': '资讯',
            },
        ),
        migrations.CreateModel(
            name='ArticleType',
            fields=[
                ('id', models.AutoField(max_length=2, primary_key=True, serialize=False, verbose_name='id')),
                ('typeName', models.CharField(max_length=50, verbose_name='分类名称')),
            ],
            options={
                'verbose_name': '资讯分类',
                'verbose_name_plural': '资讯分类',
            },
        ),
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.AutoField(max_length=2, primary_key=True, serialize=False, verbose_name='id')),
                ('authorName', models.CharField(max_length=50, verbose_name='作者')),
            ],
            options={
                'verbose_name': '资讯作者',
                'verbose_name_plural': '资讯作者',
            },
        ),
        migrations.AlterField(
            model_name='companyinfo',
            name='synopsis',
            field=DjangoUeditor.models.UEditorField(verbose_name='公司简介'),
        ),
        migrations.AddField(
            model_name='article',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='search.Author'),
        ),
        migrations.AddField(
            model_name='article',
            name='type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='search.ArticleType'),
        ),
    ]