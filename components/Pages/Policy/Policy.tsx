// import MarkdownIt from "markdown-it";
import React from "react";
import Container from "../../../layout/Container";
import {
  StyledLongText,
} from "../../../styles/styled-components/Styled-component";
import parse from "html-react-parser";
import FadIn from "../../../util/animation/FadIn";
import Aurora from "../../Global/Aurora/Aurora";
import GetInTouch from "../homepage/GetInTouch/GetInTouch";
import { format } from "date-fns";

function Policy({ policyData }: any) {

  const date = format(new Date(policyData?.updatedAt), "MM/dd/yyyy");

  return (
    <div className="mt-12 lg:mt-20">
      <Container>
        <div className="md:grid space-y-28 relative md:items-center justify-between">
          <FadIn var1={{ x: -80 }} var2={{ x: 0 }}>
            <div className=" w-full pt-[10vh] px-6 lg:px-0 relative z-10 space-y-2 lg:text-left text-center">
              <h1 className="md:text-[6vh] lg:w-[30vw]  lg:text-left text-center text-4xl leading-snug lg:text-[5.9vh]  text-primary-blue font-extrabold">
                {policyData?.title}
              </h1>
              <StyledLongText>
                <span className="lg:w-[500px]">{` Updated on ${date}`}</span>
              </StyledLongText>
            </div>
          </FadIn>

          <Aurora />
        </div>

        {/* contents */}
        <FadIn var1={{ y: 80 }} var2={{ y: 0 }} param="+=0.7">
          <div className="my-20 md:rounded-xl bg-white py-12  px-6 lg:px-16 relative card-shadow-xl lg:my-[8vh]">
            {/* <section
            className="markdown-styles"
            dangerouslySetInnerHTML={{ __html: cmsContent }}
          /> */}
            <section className="markdown-styles">
              {parse(policyData?.article?.html)}
            </section>

            {/* <div className="space-y-4 lg:space-y-4">
              <StyledSubheader>Introduction</StyledSubheader>
              <StyledLongText>
                Welcome to the Ziga’s privacy policy.
              </StyledLongText>
              <StyledLongText>
                Ziga Technology Inc (“Ziga”) respects your privacy and is
                committed to protecting your personal data. This privacy policy
                will inform you as to how we look after your personal data when
                you visit Ziga’s website (regardless of where you visit it from)
                and tell you about your privacy rights and how the law protects
                you.
              </StyledLongText>
              <StyledLongText>
                This privacy policy is provided in a layered format so you can
                click through to the specific areas set out below.
                Alternatively, you can download a pdf version of the policy
                here:{" "}
                <a
                  className="text-primary-magenta underline"
                  href="/img/pdf/Ziga-privacy-policy.docx"
                  download
                >
                  LINK
                </a>
                . Please also use the Glossary to understand the meaning of some
                of the terms used in this privacy policy.
              </StyledLongText>
              <StyledSubheader>
                1. Important information and who we are
              </StyledSubheader>
              <StyledSubheader>Purpose of this privacy policy</StyledSubheader>
              <StyledLongText>
                As a Customer, you accept this privacy policy when you sign up
                for, access, or use our products, services, content, features,
                technologies or functions offered on our website and all related
                sites, applications, and services.
              </StyledLongText>
              <StyledLongText>
                This privacy policy aims to give you information on how Ziga
                collects and processes your personal data through your use of
                Ziga on this website or its app, including any data you may
                provide through this website when you sign up to our newsletter.
                This website is not intended for children and we do not
                knowingly collect data relating to children.
              </StyledLongText>
              <StyledLongText>
                It is important that you read this privacy policy together with
                any other policy we may provide on specific occasions when we
                are collecting or processing personal data about you so that you
                are fully aware of how and why we are using your data. This
                privacy policy supplements other notices and privacy policies
                and is not intended to override them.
              </StyledLongText>
              <StyledSubheader>Controller</StyledSubheader>
              <StyledLongText>
                Ziga Technology Solutions Limited is the controller and
                responsible for your personal data (collectively referred to as
                Ziga, &quot;we&quot;, &quot;us&quot; or &quot;our&quot; in this
                privacy policy). We have appointed a data protection officer
                (DPO) who is responsible for overseeing questions in relation to
                this privacy policy. If you have any questions about this
                privacy policy, including any requests to exercise, including
                your legal rights, please contact the DPO using the details set
                out below.
              </StyledLongText>
              <StyledSubheader>Contact details</StyledSubheader>
              <StyledLongText>
                If you have any questions about this privacy policy or our
                privacy practices, please contact our DPO via email address:
                tobe@zigah.co
              </StyledLongText>
              <StyledSubheader>
                Changes to the privacy policy and your duty to inform us of
                changes
              </StyledSubheader>
              <StyledLongText>
                We keep our privacy policy under regular review and would
                communicate any changes to you through our communication
                channels. This version was last updated on 24th June 2022.
              </StyledLongText>
              <StyledLongText>
                It is important that the personal data we hold about you is
                accurate and current. Please keep us informed if your personal
                data changes during your relationship with us.
              </StyledLongText>
              <StyledSubheader>
                2. The data we collect about you
              </StyledSubheader>
              <StyledLongText>
                Personal data, or personal information, means any information
                about an individual from which that person can be identified. It
                does not include data where the identity has been removed
                (anonymous data). We may collect, use, store and transfer
                different kinds of personal data about you which we have grouped
                together as follows:
              </StyledLongText>
              <Styledul>
                <Styledlist>
                  Identity Data includes first name, maiden name, last name,
                  username or similar identifier, marital status, title, date of
                  birth and gender.
                </Styledlist>

                <Styledlist>
                  Contact Data includes billing address, delivery address, email
                  address and telephone numbers.
                </Styledlist>

                <Styledlist>
                  Financial Data includes bank account, payment card and
                  blockchain wallet details.
                </Styledlist>

                <Styledlist>
                  Transaction Data includes details about payments to and from
                  you and other details of products and services you have
                  purchased from us.
                </Styledlist>

                <Styledlist>
                  Technical Data includes internet protocol (IP) address, your
                  login data, browser type and version, time zone setting and
                  location, browser plug-in types and versions, operating system
                  and platform, and other technology on the devices you use to
                  access this website.
                </Styledlist>

                <Styledlist>
                  Profile Data includes your username and password, purchases or
                  orders made by you, your interests, preferences, feedback and
                  survey responses.
                </Styledlist>

                <Styledlist>
                  Usage Data includes information about how you use our website,
                  products and services.
                </Styledlist>

                <Styledlist>
                  Marketing and Communications Data includes your preferences in
                  receiving marketing from us and our third parties and your
                  communication preferences.
                </Styledlist>
              </Styledul>
              <StyledLongText>
                We also collect, use and share Aggregated Data such as
                statistical or demographic data for any purpose. Aggregated Data
                could be derived from your personal data but is not considered
                personal data in law as this data will not directly or
                indirectly reveal your identity. For example, we may aggregate
                your Usage Data to calculate the percentage of users accessing a
                specific website feature. However, if we combine or connect
                Aggregated Data with your personal data so that it can directly
                or indirectly identify you, we treat the combined data as
                personal data which will be used in accordance with this privacy
                policy.
              </StyledLongText>
              <StyledLongText>
                We do not collect any{" "}
                <b> Special Categories of Personal Data about</b>
                you (this includes details about your race or ethnicity,
                religious or philosophical beliefs, sex life, sexual
                orientation, political opinions, trade union membership,
                information about your health, and genetic and biometric data).
                Nor do we collect any information about criminal convictions and
                offences.
              </StyledLongText>
              <StyledSubheader>
                If you fail to provide personal data
              </StyledSubheader>
              <StyledLongText>
                Where we need to collect personal data by law, or under the
                terms of a contract we have with you, and you fail to provide
                that data when requested, we may not be able to perform the
                contract we have or are trying to enter into with you.
              </StyledLongText>
              <StyledSubheader>
                3. How is your personal data collected?
              </StyledSubheader>
              <StyledLongText>
                We use different methods to collect data from and about you
                including through:
              </StyledLongText>
              <Styledul>
                <Styledlist>
                  when you register an account on Ziga through our website;
                </Styledlist>

                <Styledlist>
                  through your relationship with us, for example information
                  provided by you when using our products or services, when
                  taking part in customer surveys, competitions and promotions;
                </Styledlist>

                <Styledlist>
                  from an analysis of the way you use and manage your account
                  with us, from the transactions you make and from the payments
                  which are made to/from your account;
                </Styledlist>

                <Styledlist>
                  when you contact Ziga through various methods such as
                  application forms, email, letters and telephone calls. If you
                  contact us or we contact you using telephone, we may monitor
                  or record the phone call for quality assurance, training and
                  security purposes;
                </Styledlist>

                <Styledlist>
                  when we obtain any data and information from third parties;
                </Styledlist>
                <Styledlist>
                  from such other sources in respect of which you have given
                  your consent to disclose information relating to you and/or
                  where not otherwise restricted.
                </Styledlist>
              </Styledul>
              <StyledSubheader>4. Cookies</StyledSubheader>
              <StyledSubheader>
                Cookies help us give you the best experience of using our site.
                In this policy we use the term &quot;cookies&quot; to refer to
                cookies and other similar technologies.
              </StyledSubheader>
              <StyledSubheader>
                Cookies are small data files that we or companies we work with
                may place on your computer or other device when you visit our
                website. They allow us to remember your actions or preferences
                over time.
              </StyledSubheader>
              <StyledSubheader>
                We use cookies to collect data that helps us to:
              </StyledSubheader>
              <Styledul>
                <Styledlist>
                  track site usage and browsing behaviour;
                </Styledlist>
                <Styledlist>
                  allow you to log-in to your account and navigate through the
                  website;
                </Styledlist>
                <Styledlist>
                  monitor the effectiveness of our promotions and advertising;
                  and
                </Styledlist>
                <Styledlist>
                  mitigate risk, enhance security and help prevent fraud.
                </Styledlist>
                <Styledlist>
                  track site usage and browsing behaviour;
                </Styledlist>
              </Styledul>
              <StyledLongText>
                <b>
                  We use both session and persistent cookies. Session cookies
                  are deleted when you close down your browser, while persistent
                  cookies remain on your device until they expire or you delete
                  them. Persistent cookies allow us to remember things about you
                  when you visit our website again.
                </b>
              </StyledLongText>
              <StyledLongText>
                <b>
                  To help us monitor the effectiveness of our promotions and
                  advertising, we may provide site usage data obtained through
                  the use of cookies to select third-party service providers.
                  Any data provided by us to these third parties will be
                  non-personally identifiable.
                </b>
              </StyledLongText>
              <StyledLongText>
                <b>
                  By signing-up for an account with Ziga, or continuing to use
                  our website, you agree to our use of cookies as set out in
                  this policy. You may decline our cookies if your browser or
                  browser add-on permits, but doing so may interfere with your
                  use of Ziga&quot;s services. For information on how to delete
                  or reject cookies, you can consult the &quot;help&quot;
                  function within your browser, or visit
                  www.allaboutcookies.org, where you will also find more
                  information about cookies generally.
                </b>
              </StyledLongText>
              <StyledSubheader>
                5. How we use your personal data
              </StyledSubheader>
              <StyledLongText>
                We will only use your personal data based on your consent and
                when the law allows us to. Most commonly, we will use your
                personal data in the following circumstances:
              </StyledLongText>
              <Styledul>
                <Styledlist>
                  Where we need to perform the contract we are about to enter
                  into or have entered into with you.
                </Styledlist>

                <Styledlist>
                  Where it is necessary for our legitimate interests (or those
                  of a third party) and your interests and fundamental rights do
                  not override those interests.
                </Styledlist>

                <Styledlist>
                  Where we need to comply with a legal obligation
                </Styledlist>

                <Styledlist>
                  For any other purpose that is required or permitted by any
                  law, regulations, guidelines or relevant regulatory
                  authorities.
                </Styledlist>
              </Styledul>
              <StyledLongText>
                Click{" "}
                <a className="text-primary-magenta underline" href="#glossary">
                  Here
                </a>{" "}
                to find out more about the types of lawful basis that we will
                rely on to process your personal data.
              </StyledLongText>
              <StyledLongText>
                Generally, we do not rely on consent as a legal basis for
                processing your personal data although we will get your consent
                before sending third party direct marketing communications to
                you via email or text message. You have the right to withdraw
                consent to marketing at any time by contacting us
              </StyledLongText>
              <StyledSubheader>Change of purpose</StyledSubheader>
              <StyledLongText>
                We will only use your personal data for the purposes for which
                we collected it, unless we reasonably consider that we need to
                use it for another reason and that reason is compatible with the
                original purpose. If you wish to get an explanation as to how
                the processing for the new purpose is compatible with the
                original purpose, please contact us.
              </StyledLongText>
              <StyledLongText>
                If we need to use your personal data for an unrelated purpose,
                we will notify you and we will explain the legal basis which
                allows us to do so.
              </StyledLongText>
              <StyledLongText>
                Please note that we may process your personal data without your
                knowledge or consent, in compliance with the above rules, where
                this is required or permitted by law.
              </StyledLongText>
              <StyledSubheader>
                6. Disclosures of your personal data
              </StyledSubheader>
              <StyledLongText>
                We may share your personal data with the parties set out below:
              </StyledLongText>
              <Styledul>
                <Styledlist>
                  Companies and organisations that act as our agents, affiliates
                  and/or professional advisers;
                </Styledlist>
                <Styledlist>
                  Companies and organisations that assist us in processing or
                  otherwise fulfilling transactions that you have requested;
                </Styledlist>

                <Styledlist>
                  Law enforcement, regulatory and governmental agencies;
                </Styledlist>

                <Styledlist>
                  Your advisers (including but not limited to accountants,
                  auditors, lawyers, financial advisers or other professional
                  advisers) where authorised by you;
                </Styledlist>

                <Styledlist>
                  Any other person notified by you as authorised to give
                  instructions or to use the accounts, facilities, products or
                  services on your behalf.
                </Styledlist>
              </Styledul>
              <StyledLongText>
                We require all third parties to respect the security of your
                personal data and to treat it in accordance with the law. We do
                not allow our third-party service providers to use your personal
                data for their own purposes and only permit them to process your
                personal data for specified purposes and in accordance with our
                instructions.
              </StyledLongText>
              <StyledSubheader>7. International transfers</StyledSubheader>
              <StyledLongText>
                The personal data we collect from you may be transferred to,
                stored and processed outside of the jurisdiction in which you
                reside, and the laws of those countries may differ from the laws
                applicable in your own country. We ensure your personal data is
                protected by requiring all our group companies to follow the
                same rules when processing your personal data. By submitting
                your personal data, you agree to the transfer, storing or
                processing of it outside of your jurisdiction.
              </StyledLongText>
              <StyledLongText>
                Whenever we transfer your personal data, we ensure a similar
                degree of protection is afforded to it by ensuring at least one
                of the following safeguards is implemented:
              </StyledLongText>
              <StyledSubheader>8. Data security</StyledSubheader>
              <StyledLongText>
                We have put in place appropriate security measures to prevent
                your personal data from being accidentally lost, used or
                accessed in an unauthorised way, altered or disclosed. In
                addition, we limit access to your personal data to those
                employees, agents, contractors and other third parties who have
                a business need to know. They will only process your personal
                data on our instructions and they are subject to a duty of
                confidentiality.
              </StyledLongText>
              <StyledLongText>
                However, please note that although we take reasonable steps to
                protect your information, no website, Internet transmission,
                computer system, or wireless connection is completely secure. We
                have therefore put in place procedures to deal with any
                suspected personal data breach and will notify you and any
                applicable regulator of a breach where we are legally required
                to do so.
              </StyledLongText>
              <StyledSubheader>9. Data retention</StyledSubheader>
              <StyledLongText>
                How long will you use my personal data for? We will only retain
                your personal data for as long as reasonably necessary to fulfil
                the purposes we collected it for. We may retain your personal
                data for a longer period in the event of a complaint or if we
                reasonably believe there is a prospect of litigation in respect
                to our relationship with you.
              </StyledLongText>
              <StyledLongText>
                To determine the appropriate retention period for personal data,
                we consider the amount, nature and sensitivity of the personal
                data, the potential risk of harm from unauthorised use or
                disclosure of your personal data, the purposes for which we
                process your personal data and whether we can achieve those
                purposes through other means, and the applicable legal,
                regulatory, tax, accounting or other requirements.
              </StyledLongText>
              <StyledLongText>
                In some circumstances we will anonymise your personal data (so
                that it can no longer be associated with you) for research or
                statistical purposes, in which case we may use this information
                indefinitely without further notice to you.
              </StyledLongText>
              <StyledSubheader>10. Your legal rights</StyledSubheader>
              <StyledLongText>
                Under certain circumstances, you have rights under data
                protection laws in relation to your personal data. Please click
                on the links below to find out more about these rights:
              </StyledLongText>
              <Styledul>
                <Styledlist>Request access to your personal data.</Styledlist>
                <Styledlist>
                  Request correction of your personal data.
                </Styledlist>
                <Styledlist>Request erasure of your personal data.</Styledlist>
                <Styledlist>
                  Object to processing of your personal data.
                </Styledlist>
                <Styledlist>
                  Request restriction of processing your personal data.
                </Styledlist>
                <Styledlist>Request transfer of your personal data.</Styledlist>
                <Styledlist>Right to withdraw consent.</Styledlist>
              </Styledul>
              <StyledLongText>
                If you wish to exercise any of the rights set out above, please
                contact our DPO.
              </StyledLongText>
              <StyledSubheader>No fee usually required</StyledSubheader>
              <StyledLongText>
                You will not have to pay a fee to access your personal data (or
                to exercise any of the other rights). However, we may charge a
                reasonable fee if your request is clearly unfounded, repetitive
                or excessive. Alternatively, we could refuse to comply with your
                request in these circumstances.
              </StyledLongText>
              <StyledSubheader>What we may need from you</StyledSubheader>
              <StyledLongText>
                We may need to request specific information from you to help us
                confirm your identity and ensure your right to access your
                personal data (or to exercise any of your other rights). This is
                a security measure to ensure that personal data is not disclosed
                to any person who has no right to receive it. We may also
                contact you to ask you for further information in relation to
                your request to speed up our response.
              </StyledLongText>
              <StyledSubheader>Time limit to respond</StyledSubheader>
              <StyledLongText>
                We try to acknowledge all legitimate requests within 24hrs and
                resolve any queries within three (3) to five (5) business days.
                Occasionally it could take us longer than a month if your
                request is particularly complex or you have made a number of
                requests. In this case, we will notify you and keep you updated.
              </StyledLongText>
              <StyledSubheader>11. Miscellaneous</StyledSubheader>
              <StyledSubheader>
                11.1 The privacy policies of other websites
              </StyledSubheader>
              <StyledSubheader>
                This privacy policy applies to only Ziga and not any other
                brands, though mentioned on our websites. Neither does it apply
                to our Merchants, Vendors, or other related partners.
              </StyledSubheader>
              <StyledSubheader>11.2 Customer Consent</StyledSubheader>
              <StyledSubheader>
                Your consent to personal data collection and processing may be
                revoked by notifying us via our contact page. Please note, in
                case you choose to not provide us with the consent or withdraw
                the consent at any given point in time, we shall not be able to
                provide the services contemplated by this notice.
              </StyledSubheader>
              <StyledSubheader id="glossary">12 Glossary</StyledSubheader>
              <StyledSubheader>LAWFUL BASIS</StyledSubheader>
              <StyledLongText>
                <b>Legitimate Interest</b> means the interest of our business in
                conducting and managing our business to enable us to give you
                the best service/product and the best and most secure
                experience. We make sure we consider and balance any potential
                impact on you (both positive and negative) and your rights
                before we process your personal data for our legitimate
                interests. We do not use your personal data for activities where
                our interests are overridden by the impact on you (unless we
                have your consent or are otherwise required or permitted to by
                law). You can obtain further information about how legitimate
                interests against any potential impact on you in respect of
                specific activities by contacting us.
              </StyledLongText>
              <StyledLongText>
                <b>Performance of Contract</b> means processing your data where
                it is necessary for the performance of a contract to which you
                are a party or to take steps at your request before entering
                into such a contract.
              </StyledLongText>
              <StyledLongText>
                <b>Comply with a legal obligation</b> means processing your
                personal data where it is necessary for compliance with a legal
                obligation that we are subject to.
              </StyledLongText>
              <StyledSubheader>YOUR LEGAL RIGHTS</StyledSubheader>
              <StyledLongText>You have the right to:</StyledLongText>
              <StyledLongText>
                <b>Request access</b> to your personal data. This enables you to
                receive a copy of the personal data we hold about you and to
                check that we are lawfully processing it.
              </StyledLongText>
              <StyledLongText>
                <b>Request correction</b> of the personal data that we hold
                about you. This enables you to have any incomplete or inaccurate
                data we hold about you corrected, though we may need to verify
                the accuracy of the new data you provide to us.
              </StyledLongText>
              <StyledLongText>
                <b>Request erasure</b> of your personal data. This enables you
                to ask us to delete or remove personal data where there is no
                good reason for us continuing to process it. You also have the
                right to ask us to delete or remove your personal data where you
                have successfully exercised your right to object to processing
                (see below), where we may have processed your information
                unlawfully or where we are required to erase your personal data
                to comply with local law. Note, however, that we may not always
                be able to comply with your request of erasure for specific
                legal reasons which will be notified to you, if applicable, at
                the time of your request.
              </StyledLongText>
              <StyledLongText>
                <b>Object to processing</b> of your personal data where we are
                relying on a legitimate interest (or those of a third party) and
                there is something about your particular situation which makes
                you want to object to processing on this ground as you feel it
                impacts on your fundamental rights and freedoms. You also have
                the right to object where we are processing your personal data
                for direct marketing purposes. In some cases, we may demonstrate
                that we have compelling legitimate grounds to process your
                information which override your rights and freedoms.
              </StyledLongText>

              <StyledLongText>
                <b>Request restriction of processing</b> of your personal data.
                This enables you to ask us to suspend the processing of your
                personal data in the following scenarios:
              </StyledLongText>

              <Styledul>
                <Styledlist>
                  If you want us to establish the data&apos;s accuracy.
                </Styledlist>

                <Styledlist>
                  Where our use of the data is unlawful but you do not want us
                  to erase it.
                </Styledlist>

                <Styledlist>
                  Where you need us to hold the data even if we no longer
                  require it as you need it to establish, exercise or defend
                  legal claims.
                </Styledlist>

                <Styledlist>
                  You have objected to our use of your data but we need to
                  verify whether we have overriding legitimate grounds to use
                  it.
                </Styledlist>
              </Styledul>

              <StyledLongText>
                <b>Request the transfer</b> of your personal data to you or to a
                third party. We will provide to you, or a third party you have
                chosen, your personal data in a structured, commonly used,
                machine-readable format. Note that this right only applies to
                automated information which you init
              </StyledLongText>

              <StyledLongText>
                <b>Withdraw consent at any time</b> where we are relying on
                consent to process your personal data. However, this will not
                affect the lawfulness of any processing carried out before you
                withdraw your consent. If you withdraw your consent, we may not
                be able to provide certain products or services to you. We will
                advise you if this is the case at the time you withdraw your
                consent.
              </StyledLongText>
            </div> */}
          </div>
        </FadIn>

        <GetInTouch />
      </Container>
    </div>
  );
}

export default Policy;
