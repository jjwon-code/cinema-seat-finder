# 🎫 명당자리 (Cinema Seating Guide)

영화 종류와 상영 타입에 최적화된 영화관 명당자리를 시각적으로 비교하고 확인할 수 있는 반응형 싱글 페이지 웹 애플리케이션(SPA)입니다.

## 🌟 핵심 기능
- **전국 영화관 데이터베이스**: CGV, 메가박스, 롯데시네마 전국 지점 및 독립영화관(라이카시네마, 에무시네마 등) 매핑.
- **영화별 맞춤 명당 알고리즘**: 자막 유무(해외/국내), 음향 지향각(뮤지컬 영화)에 맞춰 최적 추천 좌석열 실시간 리렌더링.
- **3D 가상 시야 시뮬레이터**: 선택한 좌석의 좌표에 따른 스크린 왜곡 및 시야각을 CSS 3D 변형 효과로 구현.
- **관람평 저장 시스템**: 좌석별 실시간 평점 및 관람평을 브라우저 로컬 저장소(`localStorage`)에 보존.

---

## 🚀 GitHub Pages 배포 가이드 (GitHub 웹 업로드 방식)

이 웹사이트는 순수 HTML, CSS, JavaScript로 구성된 **정적 웹사이트(Static Web)**이므로, 복잡한 빌드나 터미널 명령어 없이 브라우저에서 몇 번의 클릭만으로 배포할 수 있습니다.

### Step 1. GitHub 저장소 생성
1. [GitHub](https://github.com/)에 로그인합니다.
2. 우측 상단의 **`+`** 버튼을 누르고 **`New repository`**를 선택합니다.
3. Repository name에 `cinema-seat-finder` (또는 원하는 이름)을 입력합니다.
4. **Public**으로 설정되어 있는지 확인하고, 하단의 **`Create repository`** 버튼을 클릭합니다.

### Step 2. 웹 브라우저로 파일 업로드
1. 새로 생성된 저장소 페이지의 화면 중앙에 보이는 **`uploading an existing file`** 링크를 클릭합니다.
2. 바탕화면의 `cinema-seat-finder` 폴더 내에 있는 아래 5개 파일을 드래그 앤 드롭으로 업로드 영역에 끌어다 놓습니다.
   - `index.html`
   - `style.css`
   - `data.js`
   - `app.js`
   - `README.md`
3. 파일 목록이 다 올라가면 하단의 **`Commit changes`** 초록색 버튼을 클릭합니다.

### Step 3. GitHub Pages 활성화
1. 저장소 상단의 톱니바퀴 모양 **`Settings`** 탭으로 이동합니다.
2. 좌측 사이드바 메뉴에서 **`Pages`**를 클릭합니다.
3. Build and deployment 세션의 **Branch** 설정에서 `None`으로 되어 있는 부분을 **`main`** (또는 `master`)으로 변경합니다.
4. 바로 옆 폴더 경로는 **`/ (root)`**로 둔 채 **`Save`** 버튼을 누릅니다.

🎉 **배포 완료!**
약 1~2분 뒤 페이지를 새로고침하면 `Pages` 탭 상단에 **`Your site is live at https://[사용자명].github.io/cinema-seat-finder/`** 형태로 고유 주소가 생성됩니다. 해당 주소를 통해 전 세계 어디서든 스마트폰이나 PC로 사이트에 접속할 수 있습니다.
