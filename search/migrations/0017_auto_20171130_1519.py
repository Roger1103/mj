# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-30 15:19
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('search', '0016_enquiryinfo'),
    ]

    operations = [
        migrations.DeleteModel(
            name='CompanyInfo',
        ),
        migrations.DeleteModel(
            name='EnquiryInfo',
        ),
    ]