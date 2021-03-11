from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator, RegexValidator
from django.utils.datetime_safe import date


class CarModel(models.Model):
    class Meta:
        db_table = 'cars'
        verbose_name = 'car'

    brand = models.CharField(max_length=15, validators=[RegexValidator('[a-zA-Z]{3,15}',
                                                'Invalid brand name use only letters, min length: 3 max length: 15')])
    model = models.CharField(max_length=15, validators=[RegexValidator('[a-zA-Z]{1,15}[0-9]{0,5}',
                                                'Invalid model name use only letters, min length: 2 max length: 15')])
    produced_date = models.DateField(default=date.today(), blank=True)
    price = models.IntegerField(validators=[MinValueValidator(5000), MaxValueValidator(1000000)])
    vin_code = models.CharField(max_length=10, unique=True, validators=[RegexValidator('VIN[0-9]{5}',
                                                'Invalid VIN code. Example: VIN55555')])
    license_plate = models.CharField(max_length=8, unique=True, validators=[RegexValidator('[A-Z]{2}[0-9]{4}[A-Z]{2}',
                                                'Invalid license plate. Example: AA2222AA')])
    description = models.TextField(max_length=255, default='New car', blank=True)
    create_date = models.DateTimeField(auto_now_add=True)

