// Quiz-영화정보앱
// 아티클 리스트의 각각 무비들
interface Movie {
    title: string;
    url: string;
}
// 전체 타입
interface MovieInfo {
    articleList: Movie[];    // 타입 : Movie 어레이(배열))
    lastPublishTime: number;
    kmoreList: boolean;
}
// 출력 타입
interface RankInfo {
    title: string,
    rank: number;
}

// 1. 데이터 가져오기(fetch)
async function fetchMovieData(url: string): Promise<MovieInfo> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('요청에 실패. 상태 코드: ' + response.status);
    }
    const data = await response.json();
    return data;
}
// 2. 데이터 검증
function validateMovieData(data: MovieInfo) {
    if (!data.articleList || data.articleList.length === 0) {
        throw new Error('데이터가 없습니다.');
    }
}
// 3. 영화정보 추출
function extractMovieInfos(articleList: Array<Movie>):Array<RankInfo> {
    return articleList.map((article, idx) => ({
        title: article.title,
        rank: idx + 1,
    }));
}
// 4. 영화 출력
function displayMovies(movieInfos: Array<RankInfo>) {
    for (const movie of movieInfos) {
        console.log(`[${movie.rank}위] ${movie.title}`);
    }
}
// Url
const url = 'http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';
// 실행 함수
async function Movies(): Promise<void> {
    try {
        const data = await fetchMovieData(url);
        validateMovieData(data);
        const movieInfos = extractMovieInfos(data.articleList);
        displayMovies(movieInfos);

    }
    catch (err: unknown) { //any
        if (err instanceof Error) {
            console.log('에러 발생:', err.message);
        } else {
            console.error('알수없는 에러 발생');
        }
    }
}
