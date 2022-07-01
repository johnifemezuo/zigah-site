import {
  PrivacyPolicy,
  TermsOfService,
  Testimonial,
} from '../../../types/home';
import {
  IPrivacyResponse,
  IStoryOneResponse,
  IStoryTwoResponse,
  ITermsResponse,
  ITestimonialResponse,
} from '../../../types/response';
import { StoryOne, StoryTwo } from '../../../types/stories';
import GraphCMSCLient from '../service';
import {
  PrivacyPolicy as Privacy,
  StoryOnes,
  StoryTwos,
  TermsOfService as Terms,
  Testimonial as TestimonialService,
} from './queries';

const FetchTermServices = async (params?: {}) => {
  const variable = params;
  const response: ITermsResponse<TermsOfService[]> =
    await GraphCMSCLient.request(Terms, variable);
  return response;
};

const FetchPrivacyServices = async (params?: {}) => {
  const variable = params;
  const response: IPrivacyResponse<PrivacyPolicy[]> =
    await GraphCMSCLient.request(Privacy, variable);
  return response;
};

const FetchStoryOneServices = async (params?: {}) => {
  const variable = params;
  const response: IStoryOneResponse<StoryOne[]> = await GraphCMSCLient.request(
    StoryOnes,
    variable,
  );
  return response;
};

const FetchStoryTwoServices = async (params?: {}) => {
  const variable = params;
  const response: IStoryTwoResponse<StoryTwo[]> = await GraphCMSCLient.request(
    StoryTwos,
    variable,
  );
  return response;
};

const FetchTestimonialsServices = async (params?: {}) => {
  const variable = params;
  const response: ITestimonialResponse<Testimonial[]> =
    await GraphCMSCLient.request(TestimonialService, variable);
  return response;
};

export {
  FetchTermServices,
  FetchPrivacyServices,
  FetchStoryOneServices,
  FetchStoryTwoServices,
  FetchTestimonialsServices,
};
