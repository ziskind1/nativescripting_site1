#! /bin/zsh -
filelist=$(find data/posts -name '*.gif')
for image_file in $filelist
do
    echo $image_file
    convert $image_file -resize 50% $image_file
#latest=$(/TiffOut/*.tiff(.om[1]))
#magick $image_file $latest -evaluate-sequence Max '/TiffOut/out_${imagefile}.tiff'
done 