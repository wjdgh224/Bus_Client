# Generated by Django 4.2.3 on 2023-09-09 12:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myyl', '0002_alter_bus_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bus',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]