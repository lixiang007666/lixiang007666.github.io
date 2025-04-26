---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

我目前是[香港理工大学(PolyU)](https://www.polyu.edu.hk/)，[工程学院](https://www.polyu.edu.hk/feng/)，[工业及系统工程学系](https://www.polyu.edu.hk/en/ise/)，[RAIDS课题组](https://www.raids.group/)的博士研究生，主要从事机器人学习、人机协作的研究。

我在[河北工业大学机械工程学院](https://mes.hebut.edu.cn/)获得了学士学位。随后，我在[哈尔滨工业大学机器人技术与系统全国重点实验室](http://robot.hit.edu.cn/)攻读硕士学位。现在，我正在香港理工大学[RAIDS课题组](https://www.raids.group/)在[郑湃教授](https://www.polyu.edu.hk/ise/people/academic-staff/pai-zheng/)的指导下攻读博士学位。


<!-- 
# 🔥 News
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
-->

# 📖 教育背景
- *2024.09 - 至今*, [香港理工大学](https://www.polyu.edu.hk/), 香港。
- *2022.09 - 2024.06*, [哈尔滨工业大学](https://www.hit.edu.cn/), 哈尔滨, (成绩: 90.65, 排名: 13/177)。
- *2018.09 - 2022.06*, [河北工业大学](https://www.hebut.edu.cn/), 天津, (GPA: 3.95/4, 排名: 1/133)。

# 📝 发表论文

## 📃 期刊论文

<!-- Paper 2023.12 -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">International Journal of Advanced Manufacturing Technology</div><img src='images/publications/202409_Robotic_Grasping_Method_with_6D_Pose_Estimation_and_Point_Cloud_Fusion.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**Robotic Grasping Method with 6D Pose Estimation and Point Cloud Fusion (基于6D姿态估计和点云融合的机器人抓取方法)**](https://doi.org/10.1007/s00170-024-14372-3)

**马浩飞**, 王公成, 白华, 夏之雨, 王伟东, 杜志江

[**论文**](https://doi.org/10.1007/s00170-024-14372-3)
- 提出了一种基于点云融合和过滤的抓取姿态估计框架，解决了物体边缘处点云稀疏的问题，实现了更鲁棒的抓取。
- 引入了一种基于视角选择的新型姿态估计方法，该方法首先使用RGBD相机重建物体的点云模型，然后应用视角选择原理获取物体的6D姿态。
- 我们证明通过姿态估计和点云融合，该抓取框架可以从单视角GBD图像中准确抓取物体，即使在杂乱场景中也能保持高成功率。

</div>
</div>

<!--
[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
</div>
</div>

- [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020**
-->

- <code class="language-plaintext highlighter-rouge">INT J MED ROBOT COMP</code> Wenda Xu, Zhihang Tan, Zexin Cao, **Haofei Ma**, Gongcheng Wang, Han Wang, Weidong Wang, Zhijiang Du. "[**DP4AuSu: Autonomous Surgical Framework for Suturing Manipulation Using Diffusion Policy with Dynamic Time Wrapping-based Locally Weighted Regression**](https://doi.org/10.1002/rcs.70072)." *The International Journal of Medical Robotics and Computer Assisted Surgery* (2025). doi: [10.1002/rcs.70072](https://doi.org/10.1002/rcs.70072)

- <code class="language-plaintext highlighter-rouge">Int J Adv Manuf Tech</code> **Haofei Ma**, Gongcheng Wang, Hua Bai, Zhiyu Xia, Weidong Wang, and Zhijiang Du. "[**Robotic Grasping Method with 6D Pose Estimation and Point Cloud Fusion**](https://doi.org/10.1007/s00170-024-14372-3)." *The International Journal of Advanced Manufacturing Technology* (2024): 1-11. doi: [10.1007/s00170-024-14372-3](https://doi.org/10.1007/s00170-024-14372-3)

- <code class="language-plaintext highlighter-rouge">RAS</code> Gongcheng Wang, **Haofei Ma**, Han Wang, Pengchao Ding, Hua Bai, Wenda Xu, Weidong Wang, and Zhijiang Du. "[**Reactive mobile manipulation based on dynamic dual-trajectory tracking**](https://doi.org/10.1016/j.robot.2023.104589)." *Robotics and Autonomous Systems* 172 (2024): 104589. doi: [10.1016/j.robot.2023.104589](https://doi.org/10.1016/j.robot.2023.104589).

- <code class="language-plaintext highlighter-rouge">IEEE Sensors Journal</code> Zhiyu Xia, Han Wang, Yulong Men, **Haofei Ma**, Zexin Cao, Weidong Wang, Zhijiang Du. "[**Kalman Filter-based EM-optical Sensor Fusion for Bone Needle Position Tracking**](https://doi.org/10.1109/JSEN.2024.3364701)." *IEEE Sensors Journal* (2024). doi: [10.1109/JSEN.2024.3364701](https://doi.org/10.1109/JSEN.2024.3364701)

- <code class="language-plaintext highlighter-rouge">RAS</code> Hua Bai, Wenrui Gao, **Haofei Ma**, Pengchao Ding, Gongcheng Wang, Wenda Xu, Weidong Wang, Zhijiang Du. "[**A study of robotic search strategy for multi-radiation sources in unknown environments**](https://doi.org/10.1109/JSEN.2024.3364701)." *Robotics and Autonomous Systems* 169 (2023): 104529. doi: [10.1109/JSEN.2024.3364701](https://doi.org/10.1109/JSEN.2024.3364701).


## 📚 专利

- <code class="language-plaintext highlighter-rouge">发明专利</code> [**一种岩心箱搬运机器人**](https://cprs.patentstar.com.cn/Search/Detail?ANE=9DIE1BAA2AAA8CDA8EDA9CIB9BIF9GBC9BED6BDA9HBH9IBE), 王伟东, 梁恒斌, **马浩飞**, 王公成 (CN202310547284.5, 实质审查中)

- <code class="language-plaintext highlighter-rouge">实用新型专利</code> [**一种球形变胞机器人和基于该机器人的环境信息监测系统**](https://cprs.patentstar.com.cn/Search/Detail?ANE=AHIA8FDA8AGA9GGE9HAA6GAA9HDD9CIC9FCA9HDC9GDF9ICF), 饶钰涵, 李满宏, **马浩飞**, 高宇翀, 张诺, 刘欣宇 (CN202120212154.2)

- <code class="language-plaintext highlighter-rouge">实用新型专利</code> [**一种绳索驱动型清洁机器人**](https://cprs.patentstar.com.cn/Search/Detail?ANE=AIHA6AGA7BEA9DID9BIC9ICBBFIA8BDA9IBF9ICG8EEA9FDG), 李豹, 李满宏, 李硕凡, **马浩飞**, 郭纪东, 高宇翀, 董迎鑫 (CN202120545507.0)

- <code class="language-plaintext highlighter-rouge">实用新型专利</code> [**利用波浪能发电的小型海洋航行器**](https://cprs.patentstar.com.cn/Search/Detail?ANE=9EEB9HFD3ABA3CBA9AIB9GIF8IAA9FADBCIA9BEA9ECDAGGA), 高一晗, **马浩飞**, 陈少安, 孙浩然, 宋晨曦 (CN202020078465.X)

- <code class="language-plaintext highlighter-rouge">软件著作权</code> [**身份识别与红外测温控制系统**](https://register.ccopyright.com.cn/publicInquiry.html?type=softList&registerNumber=2021SR1391064&keyWord=%E9%A9%AC%E6%B5%A9%E9%A3%9E&publicityType=ALL&registerDateType=ALL), **马浩飞** (2021SR1391064)


# 🔍 项目经历

<!-- Project -->

## 复杂环境下的采样机器人

<div class='paper-box'>
<div class='paper-box-image'>
<div class="badge">2023.03 - 2024.05</div>
<img src='images/projects/202303_Sampling_Robots_in_Complex_Environments.png' alt="sym" width="100%">
</div>
<div class='paper-box-text' markdown="1">

由于物体表面的不规则性和光照条件的变化，从单一视角获取的点云图像在物体边缘处往往存在明显的空隙和误差，这会导致抓取姿态估计不准确。为了解决这些挑战，本文提出了一种基于6D姿态估计和点云融合的实用机器人抓取方法。首先，进行6D姿态估计，利用模型点云和姿态估计结果通过ICP（迭代最近点）算法来完善输入点云。随后，利用抓取方向估计网络，基于完整的物体点云来估计物体的6D抓取姿态。

</div><div markdown="1">

**完成工作**:
1. 建立基于视角匹配的无模型6D姿态估计网络。构建并训练姿态估计网络，实现对已见物体的精确姿态估计和对未训练物体的粗略估计方法。为未训练物体在有稀疏点云时创建姿态优化网络。

2. 提出基于姿态估计的点云融合与过滤方法。该方法解决了机器人从单一视角采集样本时物体边缘处点云空隙的问题。点云融合方法旨在利用姿态估计的输出填补输入点云的空隙并去除噪声。

3. 使用完整点云进行抓取姿态估计。利用抓取角度预测网络和快速搜索策略，完整的点云增强了抓取姿态生成的稳定性，从而提高抓取的成功率及其鲁棒性。

4. 在仿真和现实世界中使用6自由度机器人、Realsense相机和笔记本电脑（ROS/Ubuntu 20.04）作为主机测试系统。

</div>
</div>

<!-- Project -->

## 内窥镜手术自主缝合机器人系统

<div class='paper-box'>
<div class='paper-box-image'>
<div class="badge">2023.02 - 2023.07</div>
<img src='images/projects/202302_Autonomous_Suture_Operation_Robot_System_for_Endoscopic_Surgery.png' alt="sym" width="100%">
</div>
<div class='paper-box-text' markdown="1">

研究目标是提高内窥镜手术中自主缝合的效率和准确性。这涉及设计3自由度自主缝合器械，开发基于3D腹腔镜的高效腹腔镜手术机器人，以及建立集成视觉、专家和导航系统的机器人系统。

</div><div markdown="1">

**完成工作**:
1. 基于Yolov8执行手术器械和病变组织的识别与分割，确定手术器械末端的空间位置。

2. 构建视觉和机械臂融合系统，执行相机和机械臂的手眼标定，并执行基于视觉伺服的基本机器人动作。

</div>
</div>

<!-- Project -->

## 岩心箱搬运机器人

<div class='paper-box'>
<div class='paper-box-image'>
<div class="badge">2022.08 - 2023.02</div>
<img src='images/projects/202208_Rock_Core_Box_Handling_Robot.jpg' alt="sym" width="100%">
</div>
<div class='paper-box-text' markdown="1">

石油开采前钻探获得的岩心样本是评估采矿价值的关键数据，它们被存放在专用的岩心箱中。在研究和分析过程中，必须在现场按指定顺序整齐地摆放这些岩心箱，一次一箱。然而，这些箱子通常很重，导致劳动强度高，影响运输效率。本发明旨在解决当前运输岩心箱方法相关的劳动强度问题，最终提高运输效率。

</div><div markdown="1">

**完成工作**:
1. 构建利用红外传感器检测周围障碍物的感知系统，以及使用分数激光传感器检测当前堆叠高度和对齐情况。

2. 基于Mask RCNN实现岩心箱实例分割，结合深度相机确定其角空间坐标，用于机器人操作过程中的视觉伺服。

3. 利用单目相机和Aruco标记，通过识别Aruco标记的偏移距离和角度，实现机器人原地的2D姿态调整。

</div>
</div>

<!-- Project -->

## 基于双目视觉的医疗云台控制系统

<div class='paper-box'>
<div class='paper-box-image'>
<div class="badge">2022.01 - 2022.06</div>
<img src='images/projects/202201_Medical_Multi-DoF_Pan-Tilt_Control_System_Based_on_Binocular_Vision.jpg' alt="sym" width="100%">
</div>
<div class='paper-box-text' markdown="1">

在传统医疗过程中，中医师经常需要频繁更换位置和调整角度来查看手术区域。此外，在康复治疗期间，相机的范围可能不足以覆盖患者的移动区域。目前常用的记录方法存在局限性，缺乏自动化。本文介绍了一种设计用于跟踪医生和患者位置的多自由度云台系统。

[**项目**](https://github.com/HaofeiMa/Multi-DOF_PTZ), [**视频**](https://www.youtube.com/watch?v=gDLijtdpC2w)

</div><div markdown="1">

**完成工作**:
1. 设计机械结构并模拟平台运动，使用内齿旋转轴承最小化结构尺寸。为所有传感器组件设计了保护结构。

2. 使用STM32和A4988驱动器设计云台的硬件控制算法，并建立STM32与主机ROS系统之间的通信，实现ROS内的云台运动控制。

3. 提出基于HOG和SIFT特征匹配的目标跟踪方法，能够进行短期单目标跟踪，同时对目标物体外观变化保持鲁棒性。

4. 构建实验云台系统并使用所有提出的算法进行实验，使用3D打印结构组件、Realsense相机和步进电机。

</div>
</div>

<!-- Project -->

## 球形环境信息采集机器人

<div class='paper-box'>
<div class='paper-box-image'>
<div class="badge">2020.11 - 2021.05</div>
<img src='images/projects/202011_Spherical_Metamorphic_Environmental_Information_Collection_Robot.gif' alt="sym" width="50%">
<img src='images/projects/202011_Spherical_Metamorphic_Environmental_Information_Collection_Robot.png' alt="sym" width="50%">
</div>
<div class='paper-box-text' markdown="1">

监测各种危险环境（如石化厂、化工厂和灾难现场）的基本信息对于灾害预防和减轻至关重要。为应对这一需求，我们团队设计了一个球形环境监测机器人系统。它具有带有多个伸缩腿的球形变形结构，使机器人能够旋转、滚动，并实现高稳定性的全方位运动。这些机器人利用自组织网络通信技术提供多种监测模式，收集的数据被打包并传输到上位机系统，实现对复杂环境信息的实时动态监测。

</div><div markdown="1">

**完成工作**:
1. 设计球形机器人的三维结构，包括控制器在球内的放置、传感器的布局以及腿部电机的空间排列。
2. 使用STM32实现球形机器人腿部电机的控制，计算运动策略，实现机器人运动。
3. 将加速度计、温湿度传感器、气体传感器等集成到STM32控制系统中，实现蓝牙控制的机器人运动和传感器数据接收。

</div>
</div>


# 🏆 荣誉奖项

## 🏅 荣誉
- *2024.06*, 哈尔滨工业大学·鹤皋奖学金
- *2023.12*, 先导智能·王燕青奖学金
- *2023.10*, 哈尔滨工业大学优秀学生
- *2023.09*, 哈尔滨工业大学一等奖学金
- *2022.06*, 省级优秀毕业生 (1%)
- *2021.05*, 省级三好学生 (1%)
- *2021.06*, 精工技术奖学金
- *2021.01*, 河北工业大学三好学生
- *2020.12*, [国家奖学金](https://mp.weixin.qq.com/s/ulEa10HIwbCN9yk4mXRcVQ) (前0.3%)
- *2020.12*, 河北工业大学优秀学生干部
- *2020.12*, 河北工业大学一等奖学金

## 🎏 竞赛
- *2021.09*, "互联网+"创新创业大赛省级银奖
- *2021.08*, 电子商务"创新、创意及创业"挑战赛省级三等奖
- *2021.07*, 周培源力学竞赛省级二等奖和国家优秀奖
- *2020.12*, 河北省大学生机器人大赛二等奖
- *2020.10*, 电子设计竞赛省级二等奖
- *2020.10*, iCAN国际创新创业大赛省级二等奖
- *2020.09*, 机械创新设计大赛省级二等奖
- *2019.12*, 数学竞赛省级一等奖
- *2019.09*, iCAN国际创新创业大赛省级三等奖
- *2019.06*, 数学竞赛省级二等奖

# 💼 社会工作

- *2023.02 - 2023.07*, 哈尔滨工业大学学院办公室助理
- *2022.02 - 2022.06*, 河北工业大学班长
- *2019.09 - 2022.06*, 河北工业大学班级学习委员
- *2020.09 - 2021.08*, 河北工业大学海尔创客实验室主任

<!-- 
# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)
-->

<!-- 
# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China.
-->