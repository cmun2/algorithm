-- 코드를 입력하세요
SELECT 
    RI.REST_ID,           -- 'REST_INFO' 테이블의 'REST_ID'
    RI.REST_NAME,         -- 'REST_INFO' 테이블의 'REST_NAME'
    RI.FOOD_TYPE,         -- 'REST_INFO' 테이블의 'FOOD_TYPE'
    RI.FAVORITES,         -- 'REST_INFO' 테이블의 'FAVORITES'
    RI.ADDRESS,           -- 'REST_INFO' 테이블의 'ADDRESS'
    ROUND(AVG(RR.REVIEW_SCORE), 2) AS SCORE  -- 'REST_REVIEW' 테이블의 'REVIEW_SCORE' 평균
FROM 
    REST_INFO RI          -- 'REST_INFO' 테이블에 'RI'라는 별칭을 부여
JOIN 
    REST_REVIEW RR        -- 'REST_REVIEW' 테이블에 'RR'라는 별칭을 부여
    ON RI.REST_ID = RR.REST_ID
WHERE 
    RI.ADDRESS LIKE '서울%'  -- 서울에 위치한 식당만 조회
GROUP BY 
    RI.REST_ID, RI.REST_NAME, RI.FOOD_TYPE, RI.FAVORITES, RI.ADDRESS
ORDER BY 
    SCORE DESC, RI.FAVORITES DESC;