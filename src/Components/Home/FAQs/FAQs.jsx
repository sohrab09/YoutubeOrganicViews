import React from 'react';
import "./FAQs.css";
import Accordion from 'react-bootstrap/Accordion'

const FAQs = () => {

    return (
        <section className="container mt-5 mb-5">
            <div className="text-center mb-5">
                <h1 className="text-danger fw-bold">FAQs</h1>
                <small>Most frequent questions and answers</small>
            </div>
            <Accordion>
                <Accordion.Item eventKey="0" className="border-0 shadow p-3 bg-body rounded">
                    <Accordion.Header className="fw-bold">HOW DOES YOUR SERVICE WORK?</Accordion.Header>
                    <Accordion.Body>
                        We put your video in front of the YouTubers who’d want to see it. We do this by promoting your video directly on YouTube through YouTube’s Ad’s platform (Google Ads)!
                        <br /><br />
                        The process is simple: <br />
                        1. You choose a video you want to promote.<br />
                        2. You provide a few keywords/phrases that describe your video.<br />
                        3. We promote your video to YouTubers searching for your keywords or who are fans of those similar channels.
                        <br /><br />
                        For example, a yoga teacher promoting her “yoga basics” video could target the keywords “yoga poses” and “yoga workout”. Anyone searching for (or watching videos about) these keywords would see her video as a recommended video.
                        <br /><br />
                        In the case of an up-and-coming pop singer, they could target fans of “Adele” and “Beyonce” ensuring that only fans of “pop music” would be exposed to their video.
                    </Accordion.Body>
                </Accordion.Item>
                <br />
                <Accordion.Item eventKey="1" className="border-0 shadow p-3 bg-body rounded">
                    <Accordion.Header className="fw-bold">IS IT REALLY 100% SAFE?</Accordion.Header>
                    <Accordion.Body>
                        Absolutely! We only use natural methods to promote to real people. That’s why we give a range of expected views for your campaign. This range is estimated. Your campaign has the possibility of doing better or worse.
                        <br />
                        We strive to do the best we can, but it is indeed an organic promotion. We cannot force people to like your video, but we can do our absolute best to ensure it gets seen by the right people.
                    </Accordion.Body>
                </Accordion.Item>
                <br />
                <Accordion.Item eventKey="2" className="border-0 shadow p-3 bg-body rounded">
                    <Accordion.Header className="fw-bold">CAN I PROMOTE MONETIZED VIDEOS?</Accordion.Header>
                    <Accordion.Body>
                        Yes, you can promote a monetized video and yes you can earn revenue from the promotion itself.
                    </Accordion.Body>
                </Accordion.Item>
                <br />
                <Accordion.Item eventKey="3" className="border-0 shadow p-3 bg-body rounded">
                    <Accordion.Header className="fw-bold">WHERE WILL MY VIDEOS BE PROMOTED?</Accordion.Header>
                    <Accordion.Body>
                        Your video will be promoted as an Advertisement directly on YouTube and will be promoted in 3 different ways: <br />
                        1. As a commercial before similar videos (also known as an “in-stream” ad). <br />
                        2. As a “recommended” video alongside similar videos. <br />
                        3. As a “featured” search result. When a YouTube user performs a search for one of your keywords, your video will be displayed at the top of the results.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section >
    );
};

export default FAQs;