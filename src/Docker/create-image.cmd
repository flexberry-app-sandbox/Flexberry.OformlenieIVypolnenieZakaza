docker build --no-cache -f SQL\Dockerfile.PostgreSql -t oformlenie_i_vypolnenie_zakaza/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t oformlenie_i_vypolnenie_zakaza/app ../..
