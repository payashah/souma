import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContentCard from "../../components/ContentCard/ContentCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

// ==================== Styled Components ====================
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  background-color: #f8f9fa;
`;

const SliderWrapper = styled.div`
  width: 60%;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
//   margin-bottom: 2rem;
  padding: 0 1rem;
`;

const Title = styled.h1`
  display: flex;
  flex :1;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color:rgb(95, 98, 101);
  margin: 0;
  font-weight: 700;
`;

const ViewAllLink = styled.a`
  color: #6c757d;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
  
  &:hover {
    color: #0d6efd;
    text-decoration: underline;
  }
`;

const LoadingState = styled.div`
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: #6c757d;
`;

const ErrorState = styled.div`
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: #dc3545;
`;

// ==================== Interfaces ====================
interface ApiResponse {
    isSuccess: boolean;
    message: string;
    count: number;
    errorCode: number;
    errors: any[];
    data: ContentItem[];
}

interface ContentItem {
    id?: string;
    fileContent?: string;
    title?: string;
    brief?: string;
    date?: string;
    views?: number;
    isPdf?: boolean;
    category?: string;
}

interface FormattedContent {
    id: string;
    fileContent?: string;
    title: string;
    brief: string;
    date?: string;
    views?: number;
    isPdf?: boolean;
    category?: string;
}

// ==================== Main Component ====================
export default function MehrAmuz() {
    const [cardsData, setCardsData] = useState<ContentItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post<ApiResponse>(
                    'https://mehrapi.souma-p.ir/api/v1/Content/get-contents',
                    {},
                    { headers: { 'Content-Type': 'application/json' } }
                );

                const formattedData: FormattedContent[] = response.data.data.map(item => ({
                    id: item.id || '',
                    title: item.title || 'بدون عنوان',
                    brief: item.brief || 'بدون توضیحات',
                    fileContent: item.fileContent || 'image',
                    date: item.date || 'تاریخ نامعلوم',
                    views: item.views || 0,
                    isPdf: item.isPdf || false,
                    category: item.category || 'دسته‌بندی نشده'
                }));

                setCardsData(formattedData);
                setLoading(false);
            } catch (err: any) {
                setError(err.message || 'خطا در دریافت داده‌ها');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <LoadingState>در حال بارگذاری محتوا...</LoadingState>;
    if (error) return <ErrorState>{error}</ErrorState>;

    return (
        <PageContainer>
            <SliderWrapper>
                <HeaderSection>
                    <Title>مهر تحلیل</Title>
                    <ViewAllLink href="#">مشاهده همه</ViewAllLink>
                </HeaderSection>

                <Slider {...sliderSettings}>
                    {cardsData.map((card) => (
                        <ContentCard
                            key={card.id}
                            title={card.title}
                            desc={card.brief}
                            image={card.fileContent}
                            date={card.date}
                            views={card.views}
                            isPdf={card.isPdf}
                            category={card.category}
                        />
                    ))}
                </Slider>
            </SliderWrapper>
        </PageContainer>
    );
}