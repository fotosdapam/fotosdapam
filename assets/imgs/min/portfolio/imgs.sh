for f in *;
do
  # echo $f;
  a='<figure class="col-md-4">
    <img src="assets/imgs/min/portfolio/';
  b='" alt="';
  c='" class="portfolio-item">
  </figure>';
  echo $a$f$b$f$c >> imgs.txt;
done
