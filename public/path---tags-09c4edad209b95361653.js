webpackJsonp([55702396619907],{430:function(e,t){e.exports={pathContext:{posts:{NativeScript:[{excerpt:"\n Have you ever written platform specific code in NativeScript, whether it was JavaScript or CSS?\nDid it look like a giant  if - then - else  statement? Or maybe you even separated out your platform specific code into separate functions, but you…",html:'<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.54888103651355%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAADYElEQVQ4y0WT2W8bVRTG/RewGI9n8Sy2J3Ycx1lKRQsSD0igikai0DaELE2oEychSeOkWewsruNsTtxKzQMPkKSlrQQCClLpAy0SrwhVgFRUVBBvpQKFShQBiop4+nHGReLhSDNz7/zud873Xd8RQ6EtpHDMDpK2VfosjSHXYDRmMh63mKi1mZSakjop79mYxbBrMhANyX6dbtvgNcvgsB7kkK7iawsF6LKCHBfgUK3BxF5bIA65pMNsMizlMF8fpiA1J5WXb5MJpwoeqg2TiTl0hoK8aqi8IlBfpxkgHVHpDQZZTMc598E+pqIK+WiQYtJmIRVmsTHKUpNLqSFCQQ7IuRpjjsLGqQK5F1+gR31MROkCFWC3rZCJaAyHdWb225SPxLiY6WS742XOPJOisj/JarNLeY9LZV8d60838FbbS2wfb6fU8jyTTzWSkQ57pP12U1r2Wn1DgGMxg7zMKW/4+fLiJrv3f+Onb25wqfsw5UaH1Qa7+nzn6xv88esOX1zYYsp8nMm4yQk3RJ+j0ekB+xyV4ajKhADnUw4F18+V6RH+efCAv+7tcKHtIKsJjdWkzjutB7h/9w5/7+5yeXyQGRnNbCrKWE2IwYghKjV8mbAmJ+hMxw2KAlxM6Jw7eoDP10vc+uQyf+78wvah53i75Vl+F9i3Vz7k+so8m60HmatRmRGTHgI1MVb1gKoANabiOoU6k5XGMOvNEcp1GqebbG5fv8q9H39g5/vvuH3tKpU9ERZrVZZlDMV6m5mExbhEbDCiV5Pi6xW3hiJBxms0ZhMhSimLteYwp/e6rDdZVJpt7t78ip9v3ZSDZJaNsv6kuN7wEJivs8mKwn4xtcdSPFMCDIQVsq4qbXsqDdlsVX8sxf0sRB/hs7Uiny7OsOA+ylK9Xl0vpjx1pmRW8hjV6BVTukwvNlZAHPpfZU7CXUgazMUUPt44y/nRDO8OdHG+t52t5SXeXyqKGX6ZnSU3x6iOy/OhW6LTLjfO12U+Ib0rIllhRNwei+lM1QQZTEZY2fqI5YUy1zbKvHf2DLnVN6lsbHFS9niwkRqDfjHjdZldh9y4ViOAr0NuSrf0nvYCHhZQ1HNdpUX10z+xQPHUMpvTWdbGs+RKFUazedKmnxP/wdJOkGOmIuoCHBXgv09U9t7PIFpOAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="poster"\n        title=""\n        src="/static/tns-platform-specific-poster-5b1127896cad1f02d0ab92f5fffd5363-83a8b.png"\n        srcset="/static/tns-platform-specific-poster-5b1127896cad1f02d0ab92f5fffd5363-8992e.png 163w,\n/static/tns-platform-specific-poster-5b1127896cad1f02d0ab92f5fffd5363-ae0a7.png 325w,\n/static/tns-platform-specific-poster-5b1127896cad1f02d0ab92f5fffd5363-83a8b.png 650w,\n/static/tns-platform-specific-poster-5b1127896cad1f02d0ab92f5fffd5363-6ee50.png 849w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  \n\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 300px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFRklEQVQ4y1WUa2xTZRjHq2i4yTbHGPvgTAZjsPut67Zua7uu6709vZyetmt72q6Fde7CYDMYIGIcLECAOFFR0TAXuSOMyxib4xLRQYgDgqABQiJBgkKMH0iIl/j8fc8WE/3w5rTnNL/+nuf/nEdWXlZLlQot1dUaSVtvJ4OeJ7PJR1ZLE9ltQXLYQ8RxItntQbLZAmSxNpHBJJCu0UVqjZWqlI1UKldRQXEVLc0vJ5miQkO1NQYwGAwGHgwEByfC6QjD40mAd0tnOVx8AnZnDHaHCKs9CKPZh4ZGF+rUFiiqdSguq0VekYJk1VUNpFFbIZlZrQFyOiLEu+Pk9XWSzciTU1NJAYOSYk4jBQX2TGgnhytKNi7ETH2k1TlJqTJRuaIehSVKkjE70jU4YTU3kZOLMJs4AoEu1FU3wlywAH2iHi0mOVxVC9FQlAproxm8twMMCosthEajALWWo0qlHiXlKpIxOzIaBHD2sGQGv68dXj4OUV+BH47ux5OJK7h9ahRj23qxLc6hMisJGq0Xgr8NNkcEJmsAWlZdDSu9vFJLMkOjW2q+ZEZ+bytCYg94sw07Em7gwSP8cfsunk7ewJPRcfxy+iSOro1BJVdCaOpils2w2EXozT5SaTkolHqSWdgXN3vg97WSGOiEGHkDQQeHPd1R/HXrDp7d/B6/XZrEw+ExPB45i+u7NoLX1YP3d4EXWsC5YjDbQsQsoVRZSGZnQQj8cgSbOkgMrkSsZT3Ov9OPiY/68fTSNQz39+Prd/vx4PAxHO99G5/1xJFw8/AEVsHrew1uBrU7o6Q3+cAsSeZgdK+nBaHASoqGV0MQX8fNTwbwePwsfp24jE/Xvolz27bj7sFBdBpV2JkIoDu2Am5/J/xN7SwgaZyayWgJQKNzkczJhcknJBAKrqR4tAcObycOvTeAP69dx9/3HuLp8Dn8fvkafjozjomNvfhx1060xhhoCtjBgK1S2cTKngpH5uIi00DJUFyNcLgHLk87bp/5Es++vYorWzfj0clx3Dl0DEPdbbjVvxmxSAc8DOjzM7DQCod7OVm4MBsh77ShVLLUw3Coi/24B2ZHKz7YuB33Rw5jpG8DG5n3MZhg90Qr9r/VAiHQxmCdEHxt04ZsQsx2BmSDPtVDwf1vKF2IiqvgZIa7N23HyI5N+O7gXjwevoCverdgf3cEHpcTXhaIZPd/oAidZMixlHn2jgb87cSgaGbBGC0hHN97GD+fGMLudatxcWAAp/vWo8tvg01om+qdBPOw42bt4lz/ATrYRnE7ovB5EhRk/xoVu9mr5MDi4hqMnbqAyX2DGNq0FkNbNuDDNS3whlYhyCZB8HfAzZaHk18BG0vZxEKZBrL15LSHGLCFGBQqjRWlCg0ys4uwuECB4bEr+ObAPnyxJo4969qh1VkhV+jhY2UHwmtYye0w2yNksAbRMG0YknYezCYv1ajMKChVIjtPjqIKDRZm5mBJbjEuXr2P0SNH0NMcZIn6IJPJkJ42H4VFcuj0AjOMk9EaQr00NhJQp3dDXllPhcXVVFRWR/nsmrW0hJbky2lOcjpbTWo6ceYGDQyeJDdbYS/MkFFy0lya99IsSkqaQ5mZWWQwB6GWBrtObSN5tR5ypYEtyGrk5JYht7ASOfkVyM4tR35pDZ5/cTYCYivOT9xD39aPMeP555CckoK0tHQsSM/AzFkzsSyvnC2JJpIVltYyIyUVlNRQPjtZOUWUtaSQspeV0qvZBZS5KI8yXllE85JT6PMDo3Tk1CS9nDqfZs+dS6lp6ZSWnkFJKanscwapG1z0D2fSSYrqBvSXAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="poster"\n        title=""\n        src="/static/alex_ziskind-defebeeb098117944e669ca131d290c3-7358a.png"\n        srcset="/static/alex_ziskind-defebeeb098117944e669ca131d290c3-c52a9.png 163w,\n/static/alex_ziskind-defebeeb098117944e669ca131d290c3-7358a.png 300w"\n        sizes="(max-width: 300px) 100vw, 300px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Have you ever written platform specific code in NativeScript, whether it was JavaScript or CSS?\nDid it look like a giant <code>if</code>-<code>then</code>-<code>else</code> statement? Or maybe you even separated out your platform specific code into separate functions, but you still needed conditional statements and your code for iOS and Android still gets packaged up whether it’s destined for one platform or another. In this series of videos, I’ll show you how to avoid doing this altogether and get only the code you need for a specific platform packaged, all while using clean interfaces and TypeScript.\n<br/><br/></p>\n<div class="well">\n<h6>Tip #1 - Classes</h6>\n<p>\nIn this first video of the series, I show you how to separate out your platform specific code using TypeScript classes. If you need to execute different code paths on iOS and Android, and you need to encapsulate your logic using a class, this video shows you how to do it.\n<br/><br/>\n</p>\n<div class="videoWrapper">\n    <iframe width="560" height="315" src="https://www.youtube.com/embed/btq7D7w81C0" frameborder="0" allowfullscreen></iframe>\n</div>\n</div>\n<div class="well">\n<h6>Tip #2 - Functions</h6>\n<p>\nIn this second video of the series, I show you how to execute different code while calling a single function. If you need to execute different code on iOS and Android, but you’re using a functional approach, or you have some utility function, and don’t need to create a class, then this video shows you how.\n<br/><br/>\n</p>\n<div class="videoWrapper">\n    <iframe width="560" height="315" src="https://www.youtube.com/embed/rNe4UJD216A" frameborder="0" allowfullscreen></iframe>\n</div>\n</div>\n<div class="well">\n<h6>Tip #3 - CSS</h6>\n<p>\nIn this third video of the series, I show you how the best way I found so far to separate out your platform specific CSS code, while still allowing for code reuse of the styles that are shared between platforms.\n<br/><br/>\n</p>\n<div class="videoWrapper">\n    <iframe width="560" height="315" src="https://www.youtube.com/embed/v5g6irUI704" frameborder="0" allowfullscreen></iframe>\n</div>\n</div>\n<p>I hope you enjoy the series, and let me know (<a href="https://twitter.com/digitalix" target="_blank">@digitalix</a> on Twitter) if you have a specific need for code separation or you want to see a video of a different case that’s not covered in this series yet.</p>',id:"/Users/alex/Documents/Code/web/nativescripting_web2/data/posts/getting-platform-specific-in-nativescript/getting-platform-specific-in-nativescript.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2018-01-25",tags:["NativeScript","Tips and Tricks","Tutorial","Video"],path:"/posts/getting-platform-specific-in-nativescript",title:"Getting Platform Specific in NativeScript"}}],"Tips and Tricks":[{excerpt:"\n Have you ever written platform specific code in NativeScript, whether it was JavaScript or CSS?\nDid it look like a giant  if - then - else  statement? Or maybe you even separated out your platform specific code into separate functions, but you…",html:'<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.54888103651355%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAADYElEQVQ4y0WT2W8bVRTG/RewGI9n8Sy2J3Ycx1lKRQsSD0igikai0DaELE2oEychSeOkWewsruNsTtxKzQMPkKSlrQQCClLpAy0SrwhVgFRUVBBvpQKFShQBiop4+nHGReLhSDNz7/zud873Xd8RQ6EtpHDMDpK2VfosjSHXYDRmMh63mKi1mZSakjop79mYxbBrMhANyX6dbtvgNcvgsB7kkK7iawsF6LKCHBfgUK3BxF5bIA65pMNsMizlMF8fpiA1J5WXb5MJpwoeqg2TiTl0hoK8aqi8IlBfpxkgHVHpDQZZTMc598E+pqIK+WiQYtJmIRVmsTHKUpNLqSFCQQ7IuRpjjsLGqQK5F1+gR31MROkCFWC3rZCJaAyHdWb225SPxLiY6WS742XOPJOisj/JarNLeY9LZV8d60838FbbS2wfb6fU8jyTTzWSkQ57pP12U1r2Wn1DgGMxg7zMKW/4+fLiJrv3f+Onb25wqfsw5UaH1Qa7+nzn6xv88esOX1zYYsp8nMm4yQk3RJ+j0ekB+xyV4ajKhADnUw4F18+V6RH+efCAv+7tcKHtIKsJjdWkzjutB7h/9w5/7+5yeXyQGRnNbCrKWE2IwYghKjV8mbAmJ+hMxw2KAlxM6Jw7eoDP10vc+uQyf+78wvah53i75Vl+F9i3Vz7k+so8m60HmatRmRGTHgI1MVb1gKoANabiOoU6k5XGMOvNEcp1GqebbG5fv8q9H39g5/vvuH3tKpU9ERZrVZZlDMV6m5mExbhEbDCiV5Pi6xW3hiJBxms0ZhMhSimLteYwp/e6rDdZVJpt7t78ip9v3ZSDZJaNsv6kuN7wEJivs8mKwn4xtcdSPFMCDIQVsq4qbXsqDdlsVX8sxf0sRB/hs7Uiny7OsOA+ylK9Xl0vpjx1pmRW8hjV6BVTukwvNlZAHPpfZU7CXUgazMUUPt44y/nRDO8OdHG+t52t5SXeXyqKGX6ZnSU3x6iOy/OhW6LTLjfO12U+Ib0rIllhRNwei+lM1QQZTEZY2fqI5YUy1zbKvHf2DLnVN6lsbHFS9niwkRqDfjHjdZldh9y4ViOAr0NuSrf0nvYCHhZQ1HNdpUX10z+xQPHUMpvTWdbGs+RKFUazedKmnxP/wdJOkGOmIuoCHBXgv09U9t7PIFpOAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="poster"\n        title=""\n        src="/static/tns-platform-specific-poster-5b1127896cad1f02d0ab92f5fffd5363-83a8b.png"\n        srcset="/static/tns-platform-specific-poster-5b1127896cad1f02d0ab92f5fffd5363-8992e.png 163w,\n/static/tns-platform-specific-poster-5b1127896cad1f02d0ab92f5fffd5363-ae0a7.png 325w,\n/static/tns-platform-specific-poster-5b1127896cad1f02d0ab92f5fffd5363-83a8b.png 650w,\n/static/tns-platform-specific-poster-5b1127896cad1f02d0ab92f5fffd5363-6ee50.png 849w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  \n\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 300px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFRklEQVQ4y1WUa2xTZRjHq2i4yTbHGPvgTAZjsPut67Zua7uu6709vZyetmt72q6Fde7CYDMYIGIcLECAOFFR0TAXuSOMyxib4xLRQYgDgqABQiJBgkKMH0iIl/j8fc8WE/3w5rTnNL/+nuf/nEdWXlZLlQot1dUaSVtvJ4OeJ7PJR1ZLE9ltQXLYQ8RxItntQbLZAmSxNpHBJJCu0UVqjZWqlI1UKldRQXEVLc0vJ5miQkO1NQYwGAwGHgwEByfC6QjD40mAd0tnOVx8AnZnDHaHCKs9CKPZh4ZGF+rUFiiqdSguq0VekYJk1VUNpFFbIZlZrQFyOiLEu+Pk9XWSzciTU1NJAYOSYk4jBQX2TGgnhytKNi7ETH2k1TlJqTJRuaIehSVKkjE70jU4YTU3kZOLMJs4AoEu1FU3wlywAH2iHi0mOVxVC9FQlAproxm8twMMCosthEajALWWo0qlHiXlKpIxOzIaBHD2sGQGv68dXj4OUV+BH47ux5OJK7h9ahRj23qxLc6hMisJGq0Xgr8NNkcEJmsAWlZdDSu9vFJLMkOjW2q+ZEZ+bytCYg94sw07Em7gwSP8cfsunk7ewJPRcfxy+iSOro1BJVdCaOpils2w2EXozT5SaTkolHqSWdgXN3vg97WSGOiEGHkDQQeHPd1R/HXrDp7d/B6/XZrEw+ExPB45i+u7NoLX1YP3d4EXWsC5YjDbQsQsoVRZSGZnQQj8cgSbOkgMrkSsZT3Ov9OPiY/68fTSNQz39+Prd/vx4PAxHO99G5/1xJFw8/AEVsHrew1uBrU7o6Q3+cAsSeZgdK+nBaHASoqGV0MQX8fNTwbwePwsfp24jE/Xvolz27bj7sFBdBpV2JkIoDu2Am5/J/xN7SwgaZyayWgJQKNzkczJhcknJBAKrqR4tAcObycOvTeAP69dx9/3HuLp8Dn8fvkafjozjomNvfhx1060xhhoCtjBgK1S2cTKngpH5uIi00DJUFyNcLgHLk87bp/5Es++vYorWzfj0clx3Dl0DEPdbbjVvxmxSAc8DOjzM7DQCod7OVm4MBsh77ShVLLUw3Coi/24B2ZHKz7YuB33Rw5jpG8DG5n3MZhg90Qr9r/VAiHQxmCdEHxt04ZsQsx2BmSDPtVDwf1vKF2IiqvgZIa7N23HyI5N+O7gXjwevoCverdgf3cEHpcTXhaIZPd/oAidZMixlHn2jgb87cSgaGbBGC0hHN97GD+fGMLudatxcWAAp/vWo8tvg01om+qdBPOw42bt4lz/ATrYRnE7ovB5EhRk/xoVu9mr5MDi4hqMnbqAyX2DGNq0FkNbNuDDNS3whlYhyCZB8HfAzZaHk18BG0vZxEKZBrL15LSHGLCFGBQqjRWlCg0ys4uwuECB4bEr+ObAPnyxJo4969qh1VkhV+jhY2UHwmtYye0w2yNksAbRMG0YknYezCYv1ajMKChVIjtPjqIKDRZm5mBJbjEuXr2P0SNH0NMcZIn6IJPJkJ42H4VFcuj0AjOMk9EaQr00NhJQp3dDXllPhcXVVFRWR/nsmrW0hJbky2lOcjpbTWo6ceYGDQyeJDdbYS/MkFFy0lya99IsSkqaQ5mZWWQwB6GWBrtObSN5tR5ypYEtyGrk5JYht7ASOfkVyM4tR35pDZ5/cTYCYivOT9xD39aPMeP555CckoK0tHQsSM/AzFkzsSyvnC2JJpIVltYyIyUVlNRQPjtZOUWUtaSQspeV0qvZBZS5KI8yXllE85JT6PMDo3Tk1CS9nDqfZs+dS6lp6ZSWnkFJKanscwapG1z0D2fSSYrqBvSXAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="poster"\n        title=""\n        src="/static/alex_ziskind-defebeeb098117944e669ca131d290c3-7358a.png"\n        srcset="/static/alex_ziskind-defebeeb098117944e669ca131d290c3-c52a9.png 163w,\n/static/alex_ziskind-defebeeb098117944e669ca131d290c3-7358a.png 300w"\n        sizes="(max-width: 300px) 100vw, 300px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Have you ever written platform specific code in NativeScript, whether it was JavaScript or CSS?\nDid it look like a giant <code>if</code>-<code>then</code>-<code>else</code> statement? Or maybe you even separated out your platform specific code into separate functions, but you still needed conditional statements and your code for iOS and Android still gets packaged up whether it’s destined for one platform or another. In this series of videos, I’ll show you how to avoid doing this altogether and get only the code you need for a specific platform packaged, all while using clean interfaces and TypeScript.\n<br/><br/></p>\n<div class="well">\n<h6>Tip #1 - Classes</h6>\n<p>\nIn this first video of the series, I show you how to separate out your platform specific code using TypeScript classes. If you need to execute different code paths on iOS and Android, and you need to encapsulate your logic using a class, this video shows you how to do it.\n<br/><br/>\n</p>\n<div class="videoWrapper">\n    <iframe width="560" height="315" src="https://www.youtube.com/embed/btq7D7w81C0" frameborder="0" allowfullscreen></iframe>\n</div>\n</div>\n<div class="well">\n<h6>Tip #2 - Functions</h6>\n<p>\nIn this second video of the series, I show you how to execute different code while calling a single function. If you need to execute different code on iOS and Android, but you’re using a functional approach, or you have some utility function, and don’t need to create a class, then this video shows you how.\n<br/><br/>\n</p>\n<div class="videoWrapper">\n    <iframe width="560" height="315" src="https://www.youtube.com/embed/rNe4UJD216A" frameborder="0" allowfullscreen></iframe>\n</div>\n</div>\n<div class="well">\n<h6>Tip #3 - CSS</h6>\n<p>\nIn this third video of the series, I show you how the best way I found so far to separate out your platform specific CSS code, while still allowing for code reuse of the styles that are shared between platforms.\n<br/><br/>\n</p>\n<div class="videoWrapper">\n    <iframe width="560" height="315" src="https://www.youtube.com/embed/v5g6irUI704" frameborder="0" allowfullscreen></iframe>\n</div>\n</div>\n<p>I hope you enjoy the series, and let me know (<a href="https://twitter.com/digitalix" target="_blank">@digitalix</a> on Twitter) if you have a specific need for code separation or you want to see a video of a different case that’s not covered in this series yet.</p>',id:"/Users/alex/Documents/Code/web/nativescripting_web2/data/posts/getting-platform-specific-in-nativescript/getting-platform-specific-in-nativescript.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2018-01-25",tags:["NativeScript","Tips and Tricks","Tutorial","Video"],path:"/posts/getting-platform-specific-in-nativescript",title:"Getting Platform Specific in NativeScript"}}],Tutorial:[{excerpt:"\n Have you ever written platform specific code in NativeScript, whether it was JavaScript or CSS?\nDid it look like a giant  if - then - else  statement? Or maybe you even separated out your platform specific code into separate functions, but you…",html:'<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.54888103651355%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAADYElEQVQ4y0WT2W8bVRTG/RewGI9n8Sy2J3Ycx1lKRQsSD0igikai0DaELE2oEychSeOkWewsruNsTtxKzQMPkKSlrQQCClLpAy0SrwhVgFRUVBBvpQKFShQBiop4+nHGReLhSDNz7/zud873Xd8RQ6EtpHDMDpK2VfosjSHXYDRmMh63mKi1mZSakjop79mYxbBrMhANyX6dbtvgNcvgsB7kkK7iawsF6LKCHBfgUK3BxF5bIA65pMNsMizlMF8fpiA1J5WXb5MJpwoeqg2TiTl0hoK8aqi8IlBfpxkgHVHpDQZZTMc598E+pqIK+WiQYtJmIRVmsTHKUpNLqSFCQQ7IuRpjjsLGqQK5F1+gR31MROkCFWC3rZCJaAyHdWb225SPxLiY6WS742XOPJOisj/JarNLeY9LZV8d60838FbbS2wfb6fU8jyTTzWSkQ57pP12U1r2Wn1DgGMxg7zMKW/4+fLiJrv3f+Onb25wqfsw5UaH1Qa7+nzn6xv88esOX1zYYsp8nMm4yQk3RJ+j0ekB+xyV4ajKhADnUw4F18+V6RH+efCAv+7tcKHtIKsJjdWkzjutB7h/9w5/7+5yeXyQGRnNbCrKWE2IwYghKjV8mbAmJ+hMxw2KAlxM6Jw7eoDP10vc+uQyf+78wvah53i75Vl+F9i3Vz7k+so8m60HmatRmRGTHgI1MVb1gKoANabiOoU6k5XGMOvNEcp1GqebbG5fv8q9H39g5/vvuH3tKpU9ERZrVZZlDMV6m5mExbhEbDCiV5Pi6xW3hiJBxms0ZhMhSimLteYwp/e6rDdZVJpt7t78ip9v3ZSDZJaNsv6kuN7wEJivs8mKwn4xtcdSPFMCDIQVsq4qbXsqDdlsVX8sxf0sRB/hs7Uiny7OsOA+ylK9Xl0vpjx1pmRW8hjV6BVTukwvNlZAHPpfZU7CXUgazMUUPt44y/nRDO8OdHG+t52t5SXeXyqKGX6ZnSU3x6iOy/OhW6LTLjfO12U+Ib0rIllhRNwei+lM1QQZTEZY2fqI5YUy1zbKvHf2DLnVN6lsbHFS9niwkRqDfjHjdZldh9y4ViOAr0NuSrf0nvYCHhZQ1HNdpUX10z+xQPHUMpvTWdbGs+RKFUazedKmnxP/wdJOkGOmIuoCHBXgv09U9t7PIFpOAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="poster"\n        title=""\n        src="/static/tns-platform-specific-poster-5b1127896cad1f02d0ab92f5fffd5363-83a8b.png"\n        srcset="/static/tns-platform-specific-poster-5b1127896cad1f02d0ab92f5fffd5363-8992e.png 163w,\n/static/tns-platform-specific-poster-5b1127896cad1f02d0ab92f5fffd5363-ae0a7.png 325w,\n/static/tns-platform-specific-poster-5b1127896cad1f02d0ab92f5fffd5363-83a8b.png 650w,\n/static/tns-platform-specific-poster-5b1127896cad1f02d0ab92f5fffd5363-6ee50.png 849w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  \n\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 300px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFRklEQVQ4y1WUa2xTZRjHq2i4yTbHGPvgTAZjsPut67Zua7uu6709vZyetmt72q6Fde7CYDMYIGIcLECAOFFR0TAXuSOMyxib4xLRQYgDgqABQiJBgkKMH0iIl/j8fc8WE/3w5rTnNL/+nuf/nEdWXlZLlQot1dUaSVtvJ4OeJ7PJR1ZLE9ltQXLYQ8RxItntQbLZAmSxNpHBJJCu0UVqjZWqlI1UKldRQXEVLc0vJ5miQkO1NQYwGAwGHgwEByfC6QjD40mAd0tnOVx8AnZnDHaHCKs9CKPZh4ZGF+rUFiiqdSguq0VekYJk1VUNpFFbIZlZrQFyOiLEu+Pk9XWSzciTU1NJAYOSYk4jBQX2TGgnhytKNi7ETH2k1TlJqTJRuaIehSVKkjE70jU4YTU3kZOLMJs4AoEu1FU3wlywAH2iHi0mOVxVC9FQlAproxm8twMMCosthEajALWWo0qlHiXlKpIxOzIaBHD2sGQGv68dXj4OUV+BH47ux5OJK7h9ahRj23qxLc6hMisJGq0Xgr8NNkcEJmsAWlZdDSu9vFJLMkOjW2q+ZEZ+bytCYg94sw07Em7gwSP8cfsunk7ewJPRcfxy+iSOro1BJVdCaOpils2w2EXozT5SaTkolHqSWdgXN3vg97WSGOiEGHkDQQeHPd1R/HXrDp7d/B6/XZrEw+ExPB45i+u7NoLX1YP3d4EXWsC5YjDbQsQsoVRZSGZnQQj8cgSbOkgMrkSsZT3Ov9OPiY/68fTSNQz39+Prd/vx4PAxHO99G5/1xJFw8/AEVsHrew1uBrU7o6Q3+cAsSeZgdK+nBaHASoqGV0MQX8fNTwbwePwsfp24jE/Xvolz27bj7sFBdBpV2JkIoDu2Am5/J/xN7SwgaZyayWgJQKNzkczJhcknJBAKrqR4tAcObycOvTeAP69dx9/3HuLp8Dn8fvkafjozjomNvfhx1060xhhoCtjBgK1S2cTKngpH5uIi00DJUFyNcLgHLk87bp/5Es++vYorWzfj0clx3Dl0DEPdbbjVvxmxSAc8DOjzM7DQCod7OVm4MBsh77ShVLLUw3Coi/24B2ZHKz7YuB33Rw5jpG8DG5n3MZhg90Qr9r/VAiHQxmCdEHxt04ZsQsx2BmSDPtVDwf1vKF2IiqvgZIa7N23HyI5N+O7gXjwevoCverdgf3cEHpcTXhaIZPd/oAidZMixlHn2jgb87cSgaGbBGC0hHN97GD+fGMLudatxcWAAp/vWo8tvg01om+qdBPOw42bt4lz/ATrYRnE7ovB5EhRk/xoVu9mr5MDi4hqMnbqAyX2DGNq0FkNbNuDDNS3whlYhyCZB8HfAzZaHk18BG0vZxEKZBrL15LSHGLCFGBQqjRWlCg0ys4uwuECB4bEr+ObAPnyxJo4969qh1VkhV+jhY2UHwmtYye0w2yNksAbRMG0YknYezCYv1ajMKChVIjtPjqIKDRZm5mBJbjEuXr2P0SNH0NMcZIn6IJPJkJ42H4VFcuj0AjOMk9EaQr00NhJQp3dDXllPhcXVVFRWR/nsmrW0hJbky2lOcjpbTWo6ceYGDQyeJDdbYS/MkFFy0lya99IsSkqaQ5mZWWQwB6GWBrtObSN5tR5ypYEtyGrk5JYht7ASOfkVyM4tR35pDZ5/cTYCYivOT9xD39aPMeP555CckoK0tHQsSM/AzFkzsSyvnC2JJpIVltYyIyUVlNRQPjtZOUWUtaSQspeV0qvZBZS5KI8yXllE85JT6PMDo3Tk1CS9nDqfZs+dS6lp6ZSWnkFJKanscwapG1z0D2fSSYrqBvSXAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="poster"\n        title=""\n        src="/static/alex_ziskind-defebeeb098117944e669ca131d290c3-7358a.png"\n        srcset="/static/alex_ziskind-defebeeb098117944e669ca131d290c3-c52a9.png 163w,\n/static/alex_ziskind-defebeeb098117944e669ca131d290c3-7358a.png 300w"\n        sizes="(max-width: 300px) 100vw, 300px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Have you ever written platform specific code in NativeScript, whether it was JavaScript or CSS?\nDid it look like a giant <code>if</code>-<code>then</code>-<code>else</code> statement? Or maybe you even separated out your platform specific code into separate functions, but you still needed conditional statements and your code for iOS and Android still gets packaged up whether it’s destined for one platform or another. In this series of videos, I’ll show you how to avoid doing this altogether and get only the code you need for a specific platform packaged, all while using clean interfaces and TypeScript.\n<br/><br/></p>\n<div class="well">\n<h6>Tip #1 - Classes</h6>\n<p>\nIn this first video of the series, I show you how to separate out your platform specific code using TypeScript classes. If you need to execute different code paths on iOS and Android, and you need to encapsulate your logic using a class, this video shows you how to do it.\n<br/><br/>\n</p>\n<div class="videoWrapper">\n    <iframe width="560" height="315" src="https://www.youtube.com/embed/btq7D7w81C0" frameborder="0" allowfullscreen></iframe>\n</div>\n</div>\n<div class="well">\n<h6>Tip #2 - Functions</h6>\n<p>\nIn this second video of the series, I show you how to execute different code while calling a single function. If you need to execute different code on iOS and Android, but you’re using a functional approach, or you have some utility function, and don’t need to create a class, then this video shows you how.\n<br/><br/>\n</p>\n<div class="videoWrapper">\n    <iframe width="560" height="315" src="https://www.youtube.com/embed/rNe4UJD216A" frameborder="0" allowfullscreen></iframe>\n</div>\n</div>\n<div class="well">\n<h6>Tip #3 - CSS</h6>\n<p>\nIn this third video of the series, I show you how the best way I found so far to separate out your platform specific CSS code, while still allowing for code reuse of the styles that are shared between platforms.\n<br/><br/>\n</p>\n<div class="videoWrapper">\n    <iframe width="560" height="315" src="https://www.youtube.com/embed/v5g6irUI704" frameborder="0" allowfullscreen></iframe>\n</div>\n</div>\n<p>I hope you enjoy the series, and let me know (<a href="https://twitter.com/digitalix" target="_blank">@digitalix</a> on Twitter) if you have a specific need for code separation or you want to see a video of a different case that’s not covered in this series yet.</p>',id:"/Users/alex/Documents/Code/web/nativescripting_web2/data/posts/getting-platform-specific-in-nativescript/getting-platform-specific-in-nativescript.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2018-01-25",tags:["NativeScript","Tips and Tricks","Tutorial","Video"],path:"/posts/getting-platform-specific-in-nativescript",title:"Getting Platform Specific in NativeScript"}}],Video:[{excerpt:"\n Have you ever written platform specific code in NativeScript, whether it was JavaScript or CSS?\nDid it look like a giant  if - then - else  statement? Or maybe you even separated out your platform specific code into separate functions, but you…",html:'<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.54888103651355%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAADYElEQVQ4y0WT2W8bVRTG/RewGI9n8Sy2J3Ycx1lKRQsSD0igikai0DaELE2oEychSeOkWewsruNsTtxKzQMPkKSlrQQCClLpAy0SrwhVgFRUVBBvpQKFShQBiop4+nHGReLhSDNz7/zud873Xd8RQ6EtpHDMDpK2VfosjSHXYDRmMh63mKi1mZSakjop79mYxbBrMhANyX6dbtvgNcvgsB7kkK7iawsF6LKCHBfgUK3BxF5bIA65pMNsMizlMF8fpiA1J5WXb5MJpwoeqg2TiTl0hoK8aqi8IlBfpxkgHVHpDQZZTMc598E+pqIK+WiQYtJmIRVmsTHKUpNLqSFCQQ7IuRpjjsLGqQK5F1+gR31MROkCFWC3rZCJaAyHdWb225SPxLiY6WS742XOPJOisj/JarNLeY9LZV8d60838FbbS2wfb6fU8jyTTzWSkQ57pP12U1r2Wn1DgGMxg7zMKW/4+fLiJrv3f+Onb25wqfsw5UaH1Qa7+nzn6xv88esOX1zYYsp8nMm4yQk3RJ+j0ekB+xyV4ajKhADnUw4F18+V6RH+efCAv+7tcKHtIKsJjdWkzjutB7h/9w5/7+5yeXyQGRnNbCrKWE2IwYghKjV8mbAmJ+hMxw2KAlxM6Jw7eoDP10vc+uQyf+78wvah53i75Vl+F9i3Vz7k+so8m60HmatRmRGTHgI1MVb1gKoANabiOoU6k5XGMOvNEcp1GqebbG5fv8q9H39g5/vvuH3tKpU9ERZrVZZlDMV6m5mExbhEbDCiV5Pi6xW3hiJBxms0ZhMhSimLteYwp/e6rDdZVJpt7t78ip9v3ZSDZJaNsv6kuN7wEJivs8mKwn4xtcdSPFMCDIQVsq4qbXsqDdlsVX8sxf0sRB/hs7Uiny7OsOA+ylK9Xl0vpjx1pmRW8hjV6BVTukwvNlZAHPpfZU7CXUgazMUUPt44y/nRDO8OdHG+t52t5SXeXyqKGX6ZnSU3x6iOy/OhW6LTLjfO12U+Ib0rIllhRNwei+lM1QQZTEZY2fqI5YUy1zbKvHf2DLnVN6lsbHFS9niwkRqDfjHjdZldh9y4ViOAr0NuSrf0nvYCHhZQ1HNdpUX10z+xQPHUMpvTWdbGs+RKFUazedKmnxP/wdJOkGOmIuoCHBXgv09U9t7PIFpOAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="poster"\n        title=""\n        src="/static/tns-platform-specific-poster-5b1127896cad1f02d0ab92f5fffd5363-83a8b.png"\n        srcset="/static/tns-platform-specific-poster-5b1127896cad1f02d0ab92f5fffd5363-8992e.png 163w,\n/static/tns-platform-specific-poster-5b1127896cad1f02d0ab92f5fffd5363-ae0a7.png 325w,\n/static/tns-platform-specific-poster-5b1127896cad1f02d0ab92f5fffd5363-83a8b.png 650w,\n/static/tns-platform-specific-poster-5b1127896cad1f02d0ab92f5fffd5363-6ee50.png 849w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  \n\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 300px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFRklEQVQ4y1WUa2xTZRjHq2i4yTbHGPvgTAZjsPut67Zua7uu6709vZyetmt72q6Fde7CYDMYIGIcLECAOFFR0TAXuSOMyxib4xLRQYgDgqABQiJBgkKMH0iIl/j8fc8WE/3w5rTnNL/+nuf/nEdWXlZLlQot1dUaSVtvJ4OeJ7PJR1ZLE9ltQXLYQ8RxItntQbLZAmSxNpHBJJCu0UVqjZWqlI1UKldRQXEVLc0vJ5miQkO1NQYwGAwGHgwEByfC6QjD40mAd0tnOVx8AnZnDHaHCKs9CKPZh4ZGF+rUFiiqdSguq0VekYJk1VUNpFFbIZlZrQFyOiLEu+Pk9XWSzciTU1NJAYOSYk4jBQX2TGgnhytKNi7ETH2k1TlJqTJRuaIehSVKkjE70jU4YTU3kZOLMJs4AoEu1FU3wlywAH2iHi0mOVxVC9FQlAproxm8twMMCosthEajALWWo0qlHiXlKpIxOzIaBHD2sGQGv68dXj4OUV+BH47ux5OJK7h9ahRj23qxLc6hMisJGq0Xgr8NNkcEJmsAWlZdDSu9vFJLMkOjW2q+ZEZ+bytCYg94sw07Em7gwSP8cfsunk7ewJPRcfxy+iSOro1BJVdCaOpils2w2EXozT5SaTkolHqSWdgXN3vg97WSGOiEGHkDQQeHPd1R/HXrDp7d/B6/XZrEw+ExPB45i+u7NoLX1YP3d4EXWsC5YjDbQsQsoVRZSGZnQQj8cgSbOkgMrkSsZT3Ov9OPiY/68fTSNQz39+Prd/vx4PAxHO99G5/1xJFw8/AEVsHrew1uBrU7o6Q3+cAsSeZgdK+nBaHASoqGV0MQX8fNTwbwePwsfp24jE/Xvolz27bj7sFBdBpV2JkIoDu2Am5/J/xN7SwgaZyayWgJQKNzkczJhcknJBAKrqR4tAcObycOvTeAP69dx9/3HuLp8Dn8fvkafjozjomNvfhx1060xhhoCtjBgK1S2cTKngpH5uIi00DJUFyNcLgHLk87bp/5Es++vYorWzfj0clx3Dl0DEPdbbjVvxmxSAc8DOjzM7DQCod7OVm4MBsh77ShVLLUw3Coi/24B2ZHKz7YuB33Rw5jpG8DG5n3MZhg90Qr9r/VAiHQxmCdEHxt04ZsQsx2BmSDPtVDwf1vKF2IiqvgZIa7N23HyI5N+O7gXjwevoCverdgf3cEHpcTXhaIZPd/oAidZMixlHn2jgb87cSgaGbBGC0hHN97GD+fGMLudatxcWAAp/vWo8tvg01om+qdBPOw42bt4lz/ATrYRnE7ovB5EhRk/xoVu9mr5MDi4hqMnbqAyX2DGNq0FkNbNuDDNS3whlYhyCZB8HfAzZaHk18BG0vZxEKZBrL15LSHGLCFGBQqjRWlCg0ys4uwuECB4bEr+ObAPnyxJo4969qh1VkhV+jhY2UHwmtYye0w2yNksAbRMG0YknYezCYv1ajMKChVIjtPjqIKDRZm5mBJbjEuXr2P0SNH0NMcZIn6IJPJkJ42H4VFcuj0AjOMk9EaQr00NhJQp3dDXllPhcXVVFRWR/nsmrW0hJbky2lOcjpbTWo6ceYGDQyeJDdbYS/MkFFy0lya99IsSkqaQ5mZWWQwB6GWBrtObSN5tR5ypYEtyGrk5JYht7ASOfkVyM4tR35pDZ5/cTYCYivOT9xD39aPMeP555CckoK0tHQsSM/AzFkzsSyvnC2JJpIVltYyIyUVlNRQPjtZOUWUtaSQspeV0qvZBZS5KI8yXllE85JT6PMDo3Tk1CS9nDqfZs+dS6lp6ZSWnkFJKanscwapG1z0D2fSSYrqBvSXAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="poster"\n        title=""\n        src="/static/alex_ziskind-defebeeb098117944e669ca131d290c3-7358a.png"\n        srcset="/static/alex_ziskind-defebeeb098117944e669ca131d290c3-c52a9.png 163w,\n/static/alex_ziskind-defebeeb098117944e669ca131d290c3-7358a.png 300w"\n        sizes="(max-width: 300px) 100vw, 300px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Have you ever written platform specific code in NativeScript, whether it was JavaScript or CSS?\nDid it look like a giant <code>if</code>-<code>then</code>-<code>else</code> statement? Or maybe you even separated out your platform specific code into separate functions, but you still needed conditional statements and your code for iOS and Android still gets packaged up whether it’s destined for one platform or another. In this series of videos, I’ll show you how to avoid doing this altogether and get only the code you need for a specific platform packaged, all while using clean interfaces and TypeScript.\n<br/><br/></p>\n<div class="well">\n<h6>Tip #1 - Classes</h6>\n<p>\nIn this first video of the series, I show you how to separate out your platform specific code using TypeScript classes. If you need to execute different code paths on iOS and Android, and you need to encapsulate your logic using a class, this video shows you how to do it.\n<br/><br/>\n</p>\n<div class="videoWrapper">\n    <iframe width="560" height="315" src="https://www.youtube.com/embed/btq7D7w81C0" frameborder="0" allowfullscreen></iframe>\n</div>\n</div>\n<div class="well">\n<h6>Tip #2 - Functions</h6>\n<p>\nIn this second video of the series, I show you how to execute different code while calling a single function. If you need to execute different code on iOS and Android, but you’re using a functional approach, or you have some utility function, and don’t need to create a class, then this video shows you how.\n<br/><br/>\n</p>\n<div class="videoWrapper">\n    <iframe width="560" height="315" src="https://www.youtube.com/embed/rNe4UJD216A" frameborder="0" allowfullscreen></iframe>\n</div>\n</div>\n<div class="well">\n<h6>Tip #3 - CSS</h6>\n<p>\nIn this third video of the series, I show you how the best way I found so far to separate out your platform specific CSS code, while still allowing for code reuse of the styles that are shared between platforms.\n<br/><br/>\n</p>\n<div class="videoWrapper">\n    <iframe width="560" height="315" src="https://www.youtube.com/embed/v5g6irUI704" frameborder="0" allowfullscreen></iframe>\n</div>\n</div>\n<p>I hope you enjoy the series, and let me know (<a href="https://twitter.com/digitalix" target="_blank">@digitalix</a> on Twitter) if you have a specific need for code separation or you want to see a video of a different case that’s not covered in this series yet.</p>',
id:"/Users/alex/Documents/Code/web/nativescripting_web2/data/posts/getting-platform-specific-in-nativescript/getting-platform-specific-in-nativescript.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2018-01-25",tags:["NativeScript","Tips and Tricks","Tutorial","Video"],path:"/posts/getting-platform-specific-in-nativescript",title:"Getting Platform Specific in NativeScript"}}],pandas:[{excerpt:"Do Pandas eat bananas? Check out this short video that shows that yes! pandas do\nseem to really enjoy bananas!",html:'<p>Do Pandas eat bananas? Check out this short video that shows that yes! pandas do\nseem to really enjoy bananas!</p>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/4SZl1r2O_bY" frameborder="0" allowfullscreen></iframe>',id:"/Users/alex/Documents/Code/web/nativescripting_web2/data/posts/pandas-and-bananas/pandas-and-bananas.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2017-08-21",tags:["pandas","bananas"],path:"/posts/pandas-and-bananas",title:"Pandas and Bananas"}},{excerpt:"Pandas are really sweet. Here's a video of a panda eating sweet stuff.",html:'<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 300px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFRklEQVQ4y1WUa2xTZRjHq2i4yTbHGPvgTAZjsPut67Zua7uu6709vZyetmt72q6Fde7CYDMYIGIcLECAOFFR0TAXuSOMyxib4xLRQYgDgqABQiJBgkKMH0iIl/j8fc8WE/3w5rTnNL/+nuf/nEdWXlZLlQot1dUaSVtvJ4OeJ7PJR1ZLE9ltQXLYQ8RxItntQbLZAmSxNpHBJJCu0UVqjZWqlI1UKldRQXEVLc0vJ5miQkO1NQYwGAwGHgwEByfC6QjD40mAd0tnOVx8AnZnDHaHCKs9CKPZh4ZGF+rUFiiqdSguq0VekYJk1VUNpFFbIZlZrQFyOiLEu+Pk9XWSzciTU1NJAYOSYk4jBQX2TGgnhytKNi7ETH2k1TlJqTJRuaIehSVKkjE70jU4YTU3kZOLMJs4AoEu1FU3wlywAH2iHi0mOVxVC9FQlAproxm8twMMCosthEajALWWo0qlHiXlKpIxOzIaBHD2sGQGv68dXj4OUV+BH47ux5OJK7h9ahRj23qxLc6hMisJGq0Xgr8NNkcEJmsAWlZdDSu9vFJLMkOjW2q+ZEZ+bytCYg94sw07Em7gwSP8cfsunk7ewJPRcfxy+iSOro1BJVdCaOpils2w2EXozT5SaTkolHqSWdgXN3vg97WSGOiEGHkDQQeHPd1R/HXrDp7d/B6/XZrEw+ExPB45i+u7NoLX1YP3d4EXWsC5YjDbQsQsoVRZSGZnQQj8cgSbOkgMrkSsZT3Ov9OPiY/68fTSNQz39+Prd/vx4PAxHO99G5/1xJFw8/AEVsHrew1uBrU7o6Q3+cAsSeZgdK+nBaHASoqGV0MQX8fNTwbwePwsfp24jE/Xvolz27bj7sFBdBpV2JkIoDu2Am5/J/xN7SwgaZyayWgJQKNzkczJhcknJBAKrqR4tAcObycOvTeAP69dx9/3HuLp8Dn8fvkafjozjomNvfhx1060xhhoCtjBgK1S2cTKngpH5uIi00DJUFyNcLgHLk87bp/5Es++vYorWzfj0clx3Dl0DEPdbbjVvxmxSAc8DOjzM7DQCod7OVm4MBsh77ShVLLUw3Coi/24B2ZHKz7YuB33Rw5jpG8DG5n3MZhg90Qr9r/VAiHQxmCdEHxt04ZsQsx2BmSDPtVDwf1vKF2IiqvgZIa7N23HyI5N+O7gXjwevoCverdgf3cEHpcTXhaIZPd/oAidZMixlHn2jgb87cSgaGbBGC0hHN97GD+fGMLudatxcWAAp/vWo8tvg01om+qdBPOw42bt4lz/ATrYRnE7ovB5EhRk/xoVu9mr5MDi4hqMnbqAyX2DGNq0FkNbNuDDNS3whlYhyCZB8HfAzZaHk18BG0vZxEKZBrL15LSHGLCFGBQqjRWlCg0ys4uwuECB4bEr+ObAPnyxJo4969qh1VkhV+jhY2UHwmtYye0w2yNksAbRMG0YknYezCYv1ajMKChVIjtPjqIKDRZm5mBJbjEuXr2P0SNH0NMcZIn6IJPJkJ42H4VFcuj0AjOMk9EaQr00NhJQp3dDXllPhcXVVFRWR/nsmrW0hJbky2lOcjpbTWo6ceYGDQyeJDdbYS/MkFFy0lya99IsSkqaQ5mZWWQwB6GWBrtObSN5tR5ypYEtyGrk5JYht7ASOfkVyM4tR35pDZ5/cTYCYivOT9xD39aPMeP555CckoK0tHQsSM/AzFkzsSyvnC2JJpIVltYyIyUVlNRQPjtZOUWUtaSQspeV0qvZBZS5KI8yXllE85JT6PMDo3Tk1CS9nDqfZs+dS6lp6ZSWnkFJKanscwapG1z0D2fSSYrqBvSXAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="hipster guy"\n        title=""\n        src="/static/alex_ziskind-defebeeb098117944e669ca131d290c3-7358a.png"\n        srcset="/static/alex_ziskind-defebeeb098117944e669ca131d290c3-c52a9.png 163w,\n/static/alex_ziskind-defebeeb098117944e669ca131d290c3-7358a.png 300w"\n        sizes="(max-width: 300px) 100vw, 300px"\n      />\n    </span>\n  </span>\n  </p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">poop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> mooka <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Pandas are really sweet.</p>\n<p>Here\'s a video of a panda eating sweet stuff.</p>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/4n0xNbfJLR8" frameborder="0" allowfullscreen></iframe>',id:"/Users/alex/Documents/Code/web/nativescripting_web2/data/posts/pandas/pandas.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2017-08-10",tags:["pandas"],path:"/posts/pandas",title:"Sweet Pandas Eating Sweets"}}],bananas:[{excerpt:"Do Pandas eat bananas? Check out this short video that shows that yes! pandas do\nseem to really enjoy bananas!",html:'<p>Do Pandas eat bananas? Check out this short video that shows that yes! pandas do\nseem to really enjoy bananas!</p>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/4SZl1r2O_bY" frameborder="0" allowfullscreen></iframe>',id:"/Users/alex/Documents/Code/web/nativescripting_web2/data/posts/pandas-and-bananas/pandas-and-bananas.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2017-08-21",tags:["pandas","bananas"],path:"/posts/pandas-and-bananas",title:"Pandas and Bananas"}}]}}}}});
//# sourceMappingURL=path---tags-09c4edad209b95361653.js.map