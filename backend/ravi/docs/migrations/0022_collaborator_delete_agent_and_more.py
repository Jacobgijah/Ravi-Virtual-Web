# Generated by Django 5.2.3 on 2025-07-08 06:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('docs', '0021_alter_messages_email_alter_messages_user_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Collaborator',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('region', models.CharField(choices=[('01', 'Arusha'), ('02', 'Dar es salaam'), ('03', 'Dodoma'), ('04', 'Geita'), ('05', 'Iringa'), ('06', 'Kagera'), ('07', 'Katavi'), ('08', 'Kigoma'), ('09', 'Kilimanjaro'), ('10', 'Lindi'), ('11', 'Manyara'), ('12', 'Mara'), ('13', 'Mbeya'), ('14', 'Morogoro'), ('15', 'Mtwara'), ('16', 'Mwanza'), ('17', 'Njombe'), ('18', 'Pemba North'), ('19', 'Pemba South'), ('20', 'Pwani'), ('21', 'Rukwa'), ('22', 'Ruvuma'), ('23', 'Shinyanga'), ('24', 'Simiyu'), ('25', 'Singida'), ('26', 'Songwe'), ('27', 'Tabora'), ('28', 'Tanga'), ('29', 'Temeke'), ('30', 'Unguja North'), ('31', 'Unguja South'), ('32', 'Zanzibar City')], max_length=2)),
                ('collaborator_code', models.CharField(blank=True, editable=False, max_length=15, null=True, unique=True)),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('phone', models.CharField(max_length=15, unique=True)),
                ('email', models.EmailField(max_length=254, unique=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Agent',
        ),
        migrations.RenameField(
            model_name='messages',
            old_name='agent_code',
            new_name='collaborator_code',
        ),
        migrations.RenameField(
            model_name='messages',
            old_name='agent_phone',
            new_name='collaborator_phone',
        ),
    ]
