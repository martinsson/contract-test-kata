FROM php:8.2-cli
RUN pecl install \
	&& pecl install xdebug-3.2.0 \
	&& docker-php-ext-enable  xdebug

COPY --from=composer/composer:2-bin /composer /usr/bin/composer


