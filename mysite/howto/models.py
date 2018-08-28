from django.db import models
from django.conf import settings
from ckeditor_uploader.fields import RichTextUploadingField 
import bleach


class Step(models.Model):
    name = models.CharField(max_length=25)
    title = models.CharField(max_length=255)
    content = RichTextUploadingField()
    date_added = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.content = bleach.clean(self.content, 
            tags=settings.BLEACH_ALLOWED_TAGS,
            attributes=settings.BLEACH_ALLOWED_ATTRIBUTES)

        super(Step, self).save(*args, **kwargs)


    class Meta:
        ordering = "-date_added",