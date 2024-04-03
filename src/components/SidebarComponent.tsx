"use client";

import { Sidebar } from "flowbite-react";
import {
	HiArrowSmRight,
	HiChartPie,
	HiInbox,
	HiShoppingBag,
	HiTable,
	HiUser,
} from "react-icons/hi";
import React from "react";

export default function SidebarComponent() {
	return (
		<Sidebar aria-label="Sidebar with multi-level dropdown example">
			<Sidebar.Items>
				<Sidebar.ItemGroup>
					<Sidebar.Item href="/dashboard" icon={HiChartPie}>
						Dashboard
					</Sidebar.Item>
					<Sidebar.Item href="/dashboard/create-product" icon={HiTable}>
						Create Product
					</Sidebar.Item>
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	);
}
