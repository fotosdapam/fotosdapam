for f in *;
do
  new=$(echo $f | sed -r "s/[ ,(,)]/_/g");
  mv -i "$f" "$new";
  a='<figure class="col-md-4">
    <img src="assets/imgs/min/portfolio/';
  b='" alt="';
  c='" class="portfolio-item">
  </figure>';
  echo $a$f$b$f$c >> imgs.txt;
done
