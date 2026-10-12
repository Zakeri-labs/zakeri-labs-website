#!/bin/sh
# zakeri.dev must send noindex; omanai.tech must not. Usage: sh scripts/check-noindex.sh
fail=0
for u in https://zakeri.dev/ https://zakeri.dev/how-we-work https://www.zakeri.dev/; do
  curl -sIL "$u" | grep -qi '^x-robots-tag:.*noindex' && echo "ok   noindex  $u" || { echo "FAIL no noindex $u"; fail=1; }
done
for u in https://omanai.tech/ https://omanai.tech/how-we-work https://omanai.tech/robots.txt; do
  curl -sIL "$u" | grep -qi '^x-robots-tag:.*noindex' && { echo "FAIL noindex   $u"; fail=1; } || echo "ok   indexable $u"
done
curl -s https://zakeri.dev/robots.txt | grep -qi '^disallow: */ *$' && { echo "FAIL zakeri.dev robots disallows"; fail=1; } || echo "ok   zakeri.dev robots.txt open"
exit $fail
