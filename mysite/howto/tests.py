from django.test import TestCase
from .models import Step


class TestStepModel(TestCase):

    def test_can_create_object(self):
        Step.objects.create(name="samshultz",
                            title="A new title",
                            content="an awesome content")
        self.assertEqual(Step.objects.count(), 1)

    def test_str_representation(self):
        step = Step.objects.create(name="samshultz",
                                   title="A new title",
                                   content="an awesome content")
        self.assertEqual(str(step), "A new title")

    def test_unwanted_tags_where_bleached_before_save(self):
        step = Step.objects.create(name="samshultz",
           title="A new title",
           content="an awesome content <script>console.log(12) </script>")
        step = Step.objects.first()
        self.assertNotIn("<script>", step.content)


class TestHomeView(TestCase):
    """
        Tests the HomeView
    """
    def test_correct_template_was_used(self):
        """
            Tests that the view returns correct template
        """
        
        resp = self.client.get("/")
        self.assertTemplateUsed(resp, "index.html")
