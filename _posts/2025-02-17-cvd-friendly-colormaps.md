---
title: "Enhancing Research Accessibility with CVD-Friendly Colormap"
layout: post
---

Feb 17, 2025

Recently, I have been preparing my research findings for publication. During this process, one piece of advice from my PI profoundly impacted me: using colors that everyone can see. Despite years of conducting research and generating figures, I had never considered this crucial aspect of accessibility. This advice truly broadened my perspective.

# What is Color Vision Deficiency (CVD)?
According to the American Optometric Association [(AOA)](https://www.aoa.org/healthy-eyes/eye-and-vision-conditions/color-vision-deficiency?sso=y), color vision deficiency (CVD) is defined as "the inability to distinguish certain shades of color." While the term "color blindness" is often used, it is important to note that complete color blindness is rare.

According to [Colour Blind Awareness](https://www.colourblindawareness.org/), approximately 3.8% of the world population has color vision deficiency, with about 4.4% in Europe and 3.7% in the United States, based on their respective population sizes.

# Why Does This Matter in Research?
Imagine publishing a paper in the field of meteorology, specifically in the American Meteorological Society: Monthly Weather Review [(AMS:MWR)](https://www.ametsoc.org/index.cfm/ams/publications/journals/monthly-weather-review/). When I used the most popular LLM model (ChatGPT) for a quick calculation about reader count:

_"Based on available data, the AMS: Monthly Weather Review is estimated to have an annual readership of approximately *60,000 to 80,000*. This estimate considers nearly 12,000 AMS members with access to the journal, 32,787 citations of its articles in a single year, and an additional 20,000 to 30,000 readers from university libraries, research institutions, and online platforms. With an impact factor of 2.8 and an average of 142 citations per article, the journal maintains a significant presence within the meteorology and atmospheric science community, attracting researchers, professionals, and students worldwide."_

Assuming that 5% of meteorologists are interested in your paper's topic, approximately 3,000 to 4,000 people will likely view your work. Given that 3.8% of the world population has color vision deficiency, an estimated 114 to 152 readers of your paper might face difficulties interpreting your figures if they are not designed with color accessibility in mind. This could hinder their understanding and potentially reduce the likelihood of them linking your work to theirs.

That's why ensuring that your figures use CVD-friendly palettes is a crucial step in maximizing the reach, impact, and inclusivity of your scientific research. As a second option, including CVD-frienly figures as a supplementary material can be considered.


# Which Colorbars Can You Use?

At American Meteorological Society's 105th Annual Meeting (shortly [AMS 2025](https://annual.ametsoc.org/index.cfm/2025/)), in the session titled _"Creating and Nurturing an Inclusive and Equitable Weather, Water, Climate Enterprise Part I"_ of _Sixth Symposium on Diversity, Equity, and Inclusion_: Zachary Sherman presented a study titled *"Effective Visualization of Radar Data for Users Impacted by Color Vision Deficiency"* [AMS105](https://ams.confex.com/ams/105ANNUAL/meetingapp.cgi/Session/69717). In his presentation, he shared that the discussion for creating CVD-friendly colormaps for radar data visualization began on X (formerly Twitter): Fig1

and then moved to GitHub: Fig2.

Sherman states that in his presentation, after extensive community collaboration, multiple CVD-friendly colormaps were created and are now available in Py-ART. To make these colormaps accessible, a package called _*cmweather*_ was developed and is available on GitHub, PyPI, and conda-forge. This package contains CVD-friendly colormaps and other colormaps commonly used within the atmospheric science community.

He concludes his presentation with final thoughts, acknowledging that no single colormap fits all needs and emphasizing the importance of continued testing and community feedback. Their goal is to create inclusive colormaps for the CVD community while maintaining scientific accuracy. Sherman highlighted that these colormaps should be available to the entire community, with ongoing work on additional visual elements such as correlation coefficients. Legacy colormaps remain available, but the new CVD-friendly colormaps provide an accessible option. His paper, _*Effective Visualization of Radar Data for Users Impacted by Color Vision Deficiency*_, is published in the Bulletin of the American Meteorological Society and can be accessed [here](https://journals.ametsoc.org/view/journals/bams/105/8/BAMS-D-23-0056.1.xml), doi:10.1175/BAMS-D-23-0056.1.

~~o~~

To sum up, I can say that incorporating CVD-friendly colormaps into your research visuals is a small yet impactful change that enhances accessibility and inclusivity. As scientists (or _scientists-to-be_), our goal is to communicate our findings as clearly as possible to the widest audience. With tools like the *cmweather* package now available, there’s no excuse not to make our figures accessible to everyone. Let’s make science clearer and more inclusive!
