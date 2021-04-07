import styled from 'styled-components';
import Star from './Star';

function ItemReviews({ name, date, count, comment, from, link, color }) {
    return (


        <Item>
            <ReviewsTitle>
                <RvLeft>
                    <UsersCircle style={{ backgroundColor: color }}>
                        <h3>{name.split('')[0]}</h3>
                    </UsersCircle>
                    <h4>{name}</h4>
                </RvLeft>
                <RvRight>
                    <Star starCount={count} />
                    <DatePublic>{date}</DatePublic>
                </RvRight>
            </ReviewsTitle>
            <ReviewsText>{comment}</ReviewsText>
            <ReviewsInfo>
                <h3>{from}</h3>
                <a href={link} target="_blank" rel="noopener noreferrer">Ссылка на отзыв</a>
            </ReviewsInfo>
        </Item>



    )
}

export default ItemReviews;


const ReviewsInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    a {
        text-transform: uppercase;
    }
`;

const ReviewsText = styled.p`
    line-height: 24px;
`;

const DatePublic = styled.p`
    margin-top: 8px;
`;

const ReviewsTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

const RvLeft = styled.div`
    display: flex;
    align-items: center;
`;

const RvRight = styled.div`
    
`;

const UsersCircle = styled.div`
    width: 60px;
    height: 60px;
    min-height: 60px;
    min-width: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;

    h3 {
        font-size: 28px;
        color: white;
    }
`;

const Item = styled.li`
    background-color: white;
    padding: 50px;
    border-radius: 0px 20px 20px 20px;
`;