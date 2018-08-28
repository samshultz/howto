from django.test import TestCase
from howto.models import Step
from django.conf import settings
from rest_framework.test import APIRequestFactory
from mixer.backend.django import mixer
from .views import StepListView

PAGE_SIZE = settings.REST_FRAMEWORK['PAGE_SIZE']


class TestStepListCreateView(TestCase):
    
    def setUp(self):
        for _ in range(10):
            mixer.blend(Step)

    def test_view_returned_200(self):
        factory = APIRequestFactory()
        req = factory.get("/api/steps/")
        resp = StepListView.as_view()(req)
        self.assertEqual(resp.status_code, 200)

    def test_response_length_is_equal_page_size(self):

        resp = self.client.get("/api/steps/")
        self.assertEqual(len(resp.json()['results']), PAGE_SIZE)


    def test_can_create_step(self):

        data = {
            'name': 'Kendrick',
            'title': "Hello from the otherside",
            'content': "A custom content"
        }

        resp = self.client.post("/api/steps/", data=data)
        step = Step.objects.filter(title="Hello from the otherside").first()
        self.assertEqual(resp.status_code, 201)

        self.assertEqual(str(step), "Hello from the otherside")

    def test_can_search(self):
        data = {
            'name': 'Kendrick',
            'title': "Hello from the otherside",
            'content': "A custom content"
        }

        self.client.post("/api/steps/", data=data)
        resp = self.client.get("/api/steps/?search=Hello")

        self.assertGreaterEqual(len(resp.json()['results']), 0)


class TestStepDetailView(TestCase):

    def setUp(self):
        for _ in range(10):
            mixer.blend(Step)

    def test_can_go_to_detail_view(self):
        resp = self.client.get("/api/detail/1/")
        self.assertEqual(resp.status_code, 200)

    def test_response_only_contains_one_result(self):
        resp = self.client.get("/api/detail/1/")
        self.assertEqual(len(resp.json()['results']), 1)
