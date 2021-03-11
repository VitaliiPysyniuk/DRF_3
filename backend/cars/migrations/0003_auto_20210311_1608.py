# Generated by Django 3.1.7 on 2021-03-11 14:08

import datetime
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0002_auto_20210310_0143'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carmodel',
            name='brand',
            field=models.CharField(max_length=15, validators=[django.core.validators.RegexValidator('[a-zA-Z]{3,15}', 'Invalid brand name use only letters, min length: 3 max length: 15')]),
        ),
        migrations.AlterField(
            model_name='carmodel',
            name='model',
            field=models.CharField(max_length=15, validators=[django.core.validators.RegexValidator('[a-zA-Z]{1,15}[0-9]{0,5}', 'Invalid model name use only letters, min length: 2 max length: 15')]),
        ),
        migrations.AlterField(
            model_name='carmodel',
            name='produced_date',
            field=models.DateField(blank=True, default=datetime.date(2021, 3, 11)),
        ),
        migrations.AlterField(
            model_name='carmodel',
            name='vin_code',
            field=models.CharField(max_length=10, unique=True, validators=[django.core.validators.RegexValidator('VIN[0-9]{5}', 'Invalid VIN code. Example: VIN55555')]),
        ),
    ]
