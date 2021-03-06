# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-28 13:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('search', '0013_auto_20171128_1321'),
    ]

    operations = [
        migrations.AlterField(
            model_name='goods',
            name='adviseBid',
            field=models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=12, verbose_name='建议进价'),
        ),
        migrations.AlterField(
            model_name='goods',
            name='adviseSprice',
            field=models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=12, verbose_name='建议售价'),
        ),
        migrations.AlterField(
            model_name='goods',
            name='lowerSprice',
            field=models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=12, verbose_name='最低售价'),
        ),
        migrations.AlterField(
            model_name='goods',
            name='topBid',
            field=models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=12, verbose_name='最高进价'),
        ),
    ]
