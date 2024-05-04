# vue-search-meals

빌드 툴인 vite와 Vue3, Vue 컴포지션 api 동작 방식을 학습하고, 간단한 레시피 검색 기능 사이트를 개발함<br>
Learned Vue3 with Vite. Tried to implement basic functions using the Vue Composition API.<br>
I Used an Open API at [Public API](https://github.com/public-apis/public-apis), especially [The Meal DB](https://www.themealdb.com/api.php)

### 기능 ( Feature )
- 레시피 `조회` ( List Recipes. )
- 이름, 성분 및 재료를 통한 레시피 검색 ( Search by name, ingredient. )
  - 글자를 포함하는 이름을 가진 레시피 `검색` ( Search by first letter of name. )
- 다른 기능을 배우고 싶으면 사이트를 방문하시면 됩니다.**If you need other features, check out The Meal DB site.**([The Meal DB](https://www.themealdb.com/api.php))

---
# Study Note
## Webpack VS Vite
### Webpack 
- 목적
  - Webpack은 모듈 번들링 도구로, 프로젝트에 필요한 모든 자원을 번들링하여 하나의 파일로 만듦
- 장점
  - 강력한 기능과 다양한 플러그인을 제공하여 프로젝트를 세밀하게 제어
  - 대부분의 프로젝트에서 사용되는 기능을 지원하고, 커뮤니티가 크고 활발
  - 코드 스플리팅, 번들 최적화, 로더 등 다양한 기능을 제공하여 프로덕션 환경에서도 우수한 성능을 제공
- 단점
  - 설정이 복잡하고, 러닝 커브가 높음
  - 개발 시간이 오래 걸릴 수 있으며, 번들링 시간이 길어질 수 있음

### Vite
- 목적
  - 빠른 개발을 목표로 하는 도구로, 개발 서버에서 모듈을 실시간으로 번들링하여 빠른 개발 속도를 제공
  - 프로덕션 빌드 시에는 Rollup을 사용하여 최적화된 번들을 생성
- 장점
  - 개발 서버에서 HMR(Hot Module Replacement)을 통해 빠른 반응 속도를 제공하여 수정한 내용이 즉시 반영됨
  - 프로젝트를 시작하는 데 필요한 최소한의 설정만 필요하므로 초기 설정이 간단
  - 모듈 번들링을 위해 Rollup을 사용하기 때문에 프로덕션 빌드가 빠르고 효율적
- 단점
  - 아직까지는 Webpack에 비해 기능이 제한적일 수 있음. 특히 복잡한 프로젝트나 특정한 요구 사항에 대한 해결책이 부족할 수도 있음
  - Rollup 설정에는 CommonJS 처리, Polyfill 처리 등이 되어있지 않기 때문에 일일이 플러그인을 설치해야해서 번거로움
    > 하지만 설정을 마치게 되면 *정작 프로덕션 환경에서는 Webpack과 빌드 시간에서 차이가 크게 나지 않는다고 합니다.*<br>
    > 개발 환경과 프로덕션 환경의 설정이 다르기 때문에 빌드 안정성이 낮아서 개발 환경에서만 사용한다는 의견도 많습니다.


### 요약
- Webpack은 강력한 기능과 커뮤니티를 가지고 있으며, 복잡한 프로젝트에 적합
- Vite는 빠른 개발 속도를 제공하며, 간단한 프로젝트나 프로토타이핑에 적합
